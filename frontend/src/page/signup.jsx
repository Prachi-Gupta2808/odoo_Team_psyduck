// components/Signup.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "", // role field
    country: "",
    currency: "",
  });

  const [countries, setCountries] = useState([]);

  // Fetch countries from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,currencies"
        );
        const data = await res.json();
        const countryOptions = data
          .map((c) => ({
            name: c.name.common,
            currency: c.currencies ? Object.keys(c.currencies)[0] : "",
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(countryOptions);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && {
        currency: countries.find((c) => c.name === value)?.currency || "",
      }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log data (here you can send to your API)
    console.log("Signup Data:", form);

    // Redirect based on role
    if (form.role === "Admin") navigate("/admin");
    else if (form.role === "Manager") navigate("/manager");
    else if (form.role === "Employee") navigate("/employee");
    else alert("Please select a role!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        {/* App Branding */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800/70">Ex-Tracker</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Track your expenses, stay on budget, and visualize your financial
            journey.
          </p>
        </div>

        {/* Input Fields */}
        {["Username", "Email", "Password"].map((label, idx) => {
          const name = label.replace(/\s+/g, "").toLowerCase();
          return (
            <div key={idx} className="mb-3">
              <label className="block mb-1 text-gray-700 text-sm">
                {label}
              </label>
              <input
                type={name === "email" ? "email" : "text"}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={label}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70 text-sm"
                required
              />
            </div>
          );
        })}

        {/* Role Selector */}
        <div className="mb-3">
          <label className="block mb-1 text-gray-700 text-sm">Your Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70 text-sm"
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
        </div>

        {/* Country Dropdown */}
        <div className="mb-3">
          <label className="block mb-1 text-gray-700 text-sm">Country</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800/70 text-sm"
            required
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name} ({c.currency})
              </option>
            ))}
          </select>
          {form.currency && (
            <p className="text-xs text-gray-500 mt-1">
              Selected currency:{" "}
              <span className="font-semibold">{form.currency}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-800/70 hover:bg-blue-800/50 text-white py-2 rounded font-semibold text-sm transition"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-3 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-800 font-semibold cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
