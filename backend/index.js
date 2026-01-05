require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");
const authMiddleware = require("./middleware/auth");

const app = express();

// ---------------------- CORS ----------------------
const FRONTEND_URLS = [
  "http://localhost:3000",
  "http://localhost:3001",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests like Postman (no origin)
    if (!origin) return callback(null, true);

    if (FRONTEND_URLS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ---------------------- MIDDLEWARE ----------------------
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------------- DATABASE ----------------------
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch(err => console.log("DB Error ❌", err));

// ---------------------- TEST ROUTE ----------------------
app.get("/", (req, res) => res.send("Backend is live 🚀"));

// ---------------------- AUTH ROUTES ----------------------
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      role: "user"
    });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.log("SIGNUP ERROR ❌", err);
    res.status(500).json({ msg: "Signup failed" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true
    });

    res.json({ success: true });
  } catch (err) {
    console.log("LOGIN ERROR ❌", err);
    res.status(500).json({ msg: "Login failed" });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ success: true });
});

app.get("/verify", authMiddleware, (req, res) => {
  res.json({ authorized: true, user: req.user });
});

// ---------------------- HOLDINGS ----------------------
app.get("/allHoldings", authMiddleware, async (req, res) => {
  try {
    const data = await HoldingsModel.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- POSITIONS ----------------------
app.get("/allPositions", authMiddleware, async (req, res) => {
  try {
    const data = await PositionsModel.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- ORDERS ----------------------
app.post("/newOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const result = await OrdersModel.collection.insertOne({ name, qty, price, mode });
    res.status(201).json({ message: "Order saved!", result });
  } catch (err) {
    console.log("❌ Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/sellOrder", authMiddleware, async (req, res) => {
  try {
    const { name, qty } = req.body;
    const order = await OrdersModel.findOne({ name });

    if (!order) return res.status(404).json({ message: "Order not found" });

    const sellQty = Number(qty);

    if (sellQty >= order.qty) {
      await OrdersModel.deleteOne({ _id: order._id });
      res.json({ message: "Order fully sold & deleted" });
    } else {
      order.qty -= sellQty;
      await order.save();
      res.json({ message: "Order partially sold", left: order.qty });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- START SERVER ----------------------
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`🔥 Server running at port ${PORT}`));
