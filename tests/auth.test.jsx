import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Login from "../src/pages/Auth/Login";
import Register from "../src/pages/Auth/Register";

describe("Auth Components", () => {
  describe("Login Component", () => {
    it("renders the login form fields", () => {
      render(<Login />);
      expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /sign in/i }),
      ).toBeInTheDocument();
    });

    it("updates input values when user types", async () => {
      render(<Login />);
      const user = userEvent.setup();

      const emailInput = screen.getByPlaceholderText(/email/i);
      const passwordInput = screen.getByPlaceholderText(/password/i);

      await user.type(emailInput, "test@example.com");
      await user.type(passwordInput, "securePassword123");

      expect(emailInput).toHaveValue("test@example.com");
      expect(passwordInput).toHaveValue("securePassword123");
    });

    it("logs email and password on submit", async () => {
      const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

      render(<Login />);
      const user = userEvent.setup();

      await user.type(
        screen.getByPlaceholderText(/email/i),
        "test@example.com",
      );
      await user.type(
        screen.getByPlaceholderText(/password/i),
        "myPassword123",
      );
      await user.click(screen.getByRole("button", { name: /sign in/i }));

      expect(logSpy).toHaveBeenCalledWith("Email: test@example.com");
      expect(logSpy).toHaveBeenCalledWith("Password: myPassword123");
      expect(alertSpy).toHaveBeenCalledWith("Success!");

      logSpy.mockRestore();
      alertSpy.mockRestore();
    });
  });

  describe("Register Component", () => {
    it("renders the register form fields", () => {
      render(<Register />);
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /register/i }),
      ).toBeInTheDocument();
    });

    it("logs the form data on submit", async () => {
      const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

      render(<Register />);
      await userEvent.type(screen.getByLabelText(/name/i), "JohnDoe");
      await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
      await userEvent.type(screen.getByLabelText(/password/i), "password123");
      await userEvent.click(screen.getByRole("button", { name: /register/i }));

      expect(logSpy).toHaveBeenCalledWith("Register Attempt:", {
        name: "JohnDoe",
        email: "john@example.com",
        password: "password123",
      });

      logSpy.mockRestore();
    });
  });
});
