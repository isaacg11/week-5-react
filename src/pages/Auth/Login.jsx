import React, { useState } from "react";
import "./Auth.css";
import loginImage from "../../../resources/login-image.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    window.alert("Success!");
  };

  return (
    <div className="auth-split-container">
      <div className="auth-form-section">
        <div className="auth-form-content">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue to ThreadHive</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary">
              Sign In
            </button>
          </form>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="oauth-buttons">
            <button className="btn-oauth">
              <span className="oauth-icon">🍎</span> Apple
            </button>
            <button className="btn-oauth">
              <span className="oauth-icon">G</span> Google
            </button>
          </div>

          <p className="auth-footer-text">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>

      <div className="auth-image-section">
        <img src={loginImage} alt="Professional workspace" />
      </div>
    </div>
  );
}

export default Login;
