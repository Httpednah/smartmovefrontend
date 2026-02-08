import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "./Login.css";

export default function Login({ role: initialRole = "client", onSuccess }) {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(initialRole);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync role if coming from Home
  useEffect(() => {
    setRole(initialRole);
  }, [initialRole]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    // 🔐 MOCK AUTH (replace later)
    setTimeout(() => {
      if (role === "admin" && email !== "admin@smartmove.com") {
        toast.error("Admin access requires admin credentials");
        setLoading(false);
        return;
      }

      const user = {
        name: email.split("@")[0],
        email,
        role,
      };

      signIn(user);
      toast.success(`Welcome back, ${role.toUpperCase()} 🎉`);
      setLoading(false);

      if (onSuccess) onSuccess(role);
    }, 800);
  }

  function handleDemoLogin(demoRole) {
    setLoading(true);

    setTimeout(() => {
      signIn({
        name: "Demo User",
        email: `${demoRole}@demo.com`,
        role: demoRole,
      });

      toast.success(`Logged in as ${demoRole.toUpperCase()}`);
      setLoading(false);

      if (onSuccess) onSuccess(demoRole);
    }, 500);
  }

  return (
    <div className="login-container">
      <div className="login-logo">
        <div className="logo-box">S</div>
        <h1>SmartMove</h1>
      </div>

      <div className="login-card">
        <h2>
          {role === "admin" && "Admin Login"}
          {role === "mover" && "Mover Login"}
          {role === "client" && "Client Login"}
        </h2>

        <p>
          {role === "admin" && "Manage platform operations and approvals"}
          {role === "mover" && "View jobs, update move status"}
          {role === "client" && "Manage your moves and bookings"}
        </p>

        <form onSubmit={handleSubmit}>
          {/* ROLE SELECT */}
          <div className="form-group">
            <label>Login as</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="client">Client</option>
              <option value="mover">Mover</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@smartmove.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label className="remember-me">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>

          <button className="btn-signin" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="divider">
          <span>DEMO ACCESS</span>
        </div>

        <div className="social-group">
          <button onClick={() => handleDemoLogin("client")}>Demo Client</button>
          <button onClick={() => handleDemoLogin("mover")}>Demo Mover</button>
          <button onClick={() => handleDemoLogin("admin")}>Demo Admin</button>
        </div>

        <p className="signup-text">
          New here? <span>Create an account</span>
        </p>
      </div>

      <p className="footer-legal">© SmartMove · Secure logistics platform</p>
    </div>
  );
}
