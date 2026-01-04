import { useState } from "react";
import axios from "axios";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Use environment variable for backend
      const API_URL = process.env.REACT_APP_API_URL;

      await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true } // Important for cookies
      );

      // Redirect to dashboard (frontend URL)
      window.location.href = process.env.REACT_APP_DASHBOARD_URL || "/";
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError(err.response?.data?.msg || "Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit">Login</button>
        </form>

        <div className="auth-footer">
          Don’t have an account? <a href="/signup">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
