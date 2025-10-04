// components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert('Please fill in all fields!');
      return;
    }
    console.log('Login data:', form);
    alert('Login submitted! Check console.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* App Branding */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800/70">Ex-Tracker</h1>
          <p className="text-gray-600 text-sm mt-1">
            Track your expenses, stay on budget, and visualize your financial journey.
          </p>
        </div>

        {/* Email Field */}
        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70"
          placeholder="you@example.com"
          required
        />

        {/* Password Field */}
        <label className="block mb-2 text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70"
          placeholder="********"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-800/70 hover:bg-blue-800/50 text-white py-2 rounded font-semibold transition"
        >
          Login
        </button>

        {/* Extra Links */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          Don't have an account? <a href="#signup" className="text-blue-700 hover:underline">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
