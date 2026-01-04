require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
const authMiddleware = require("./middleware/auth");


app.use(cors({
  origin:   ["http://localhost:3000" , "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATABASE
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected 🚀"))
.catch((err) => console.log("DB Error ❌", err));

app.get("/verify", authMiddleware, (req, res) => {
  res.json({
    authorized: true,
    user: req.user
  });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ msg: "Login failed" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    console.log("REQ BODY 🔥", req.body);

    const { username, email, password } = req.body;

    // 1. Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create user
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      role: "user"
    });

    // 4. Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 5. Send cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });

    res.status(201).json({ success: true });
  } catch (err) {
    console.log("SIGNUP ERROR ❌", err);
    res.status(500).json({ msg: "Signup failed" });
  }
});


app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

// HOLDINGS ROUTE
app.get("/allHoldings", authMiddleware, async (req, res) => {
  const collections = await mongoose.connection.db
    .listCollections()
    .toArray();

  console.log(
    "COLLECTIONS:",
    collections.map(c => c.name)
  );

  const data = await HoldingsModel.find({});
  console.log("HOLDINGS DATA:", data);

  res.json(data);
});


// POSITIONS ROUTE
app.get("/allPositions", authMiddleware ,  async (req, res) => {
  const data = await PositionsModel.find({});
  res.json(data);
});

// BUY ORDER
app.post("/newOrder", authMiddleware ,  async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const result = await OrdersModel.collection.insertOne({ name, qty, price, mode });

    res.status(201).json({ message: "Order saved!", result });
  } catch (err) {
    console.log("❌ Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// SELL ORDER
app.post("/sellOrder", authMiddleware ,  async (req, res) => {
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

// START SERVER
app.listen(3002, () => console.log("🔥 Server running at http://localhost:3002")); 