// page/ManagerPortal.jsx
import React, { useState } from "react";
import { LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManagerPortal = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Manager", password: "123456" },
    { id: 2, name: "Jane Smith", role: "Employee", password: "abcdef" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", role: "Employee", password: "" });

  // Add user
  const handleAddUser = () => {
    if (!newUser.name || !newUser.password) return alert("Fill all fields");
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setNewUser({ name: "", role: "Employee", password: "" });
  };

  // Delete user
  const handleDeleteUser = (id) => setUsers(users.filter(u => u.id !== id));

  // Update password
  const handleChangePassword = (id) => {
    const newPass = prompt("Enter new password:");
    if (newPass) {
      setUsers(users.map(u => u.id === id ? { ...u, password: newPass } : u));
    }
  };

  return (
    <div className="relative p-6 bg-gray-50 min-h-screen">
      {/* Dashboard button */}
      <button
        onClick={() => navigate("/manager/dashboard/")}
        className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
        title="Go to Dashboard"
      >
        <LayoutDashboard className="h-5 w-5 text-blue-700" />
        <span className="text-blue-700 font-medium text-sm">Dashboard</span>
      </button>

      <h1 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
        Manager Portal
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to your manager portal! Here you can oversee employees, manage accounts, and track their progress.
      </p>

      {/* Add User Section */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          className="border p-2 rounded mr-2"
        >
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleAddUser}
          className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
        >
          Add
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Users</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th>Role</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{user.name}</td>
                <td>{user.role}</td>
                <td>{user.password}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleChangePassword(user.id)}
                    className="text-sm text-green-600 hover:underline"
                  >
                    Change Password
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerPortal;
