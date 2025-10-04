// components/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    portal: "", // portal selection
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.portal) {
      alert("Please fill all fields and select a portal!");
      return;
    }

    console.log("Login Data:", form);

    // Redirect based on selected portal
    if (form.portal === "Manager") navigate("/manager");
    else if (form.portal === "Employee") navigate("/employee");
    else if (form.portal === "Admin") navigate("/admin");
    else alert("Invalid portal selected!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Branding */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800/70">Ex-Tracker</h1>
          <p className="text-gray-500 text-sm mt-1">
            Track your expenses, stay on budget, and visualize your financial journey.
          </p>
        </div>

        {/* Portal Selection */}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 text-sm">Select Portal</label>
          <select
            name="portal"
            value={form.portal}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70 text-sm"
            required
          >
            <option value="">-- Select Portal --</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="block mb-1 text-gray-700 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70 text-sm"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block mb-1 text-gray-700 text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70 text-sm"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-800/70 hover:bg-blue-800/50 text-white py-2 rounded font-semibold text-sm transition"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-500 mt-3 text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-800 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
