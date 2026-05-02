import React, { useState } from "react";
import "./Auth.css";

function ResetPassword({ onResetPassword }) {
  const [form, setForm] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate that new password and confirm password match
    if (form.newPassword !== form.confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    // Call the callback prop
    if (onResetPassword) {
      onResetPassword(form);
    }

    console.log("Reset Password Attempt:", {
      email: form.email,
      oldPassword: form.oldPassword,
      newPassword: form.newPassword,
    });

    // Show success message
    setSuccess(true);

    // Clear form after successful submission
    setForm({
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <label htmlFor="oldPassword">Old Password</label>
          <input
            id="oldPassword"
            name="oldPassword"
            type="password"
            value={form.oldPassword}
            onChange={handleChange}
            placeholder="Old Password"
            required
          />

          <label htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            value={form.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />

          <button type="submit">Reset Password</button>
        </form>

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">Password reset successful!</p>}
      </div>
    </div>
  );
}

export default ResetPassword;
