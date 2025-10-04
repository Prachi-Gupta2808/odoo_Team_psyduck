// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole"); // admin | employee | manager | null

  const roleText = {
    admin: "You are logged in as Admin",
    employee: "You are logged in as Employee",
    manager: "You are logged in as Manager",
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3 text-center">
        Welcome to Ex-Tracker
      </h1>

      <p className="text-gray-700 text-md mb-6 text-center">
        {userRole ? roleText[userRole] : "Track your expenses and manage your finances."}
      </p>

      {!userRole ? (
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            LogIn
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogout}
          className="mt-4 px-5 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
