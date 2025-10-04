// page/AdminPortal.jsx
import React from "react";
import { Settings, Users, FileText, BarChart2, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="relative space-y-6">
    {/* Dashboard icon in top-right */}
<button
  onClick={() => navigate("/admin/dashboard/")}
  className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
  title="Go to Dashboard"
>
  <LayoutDashboard className="h-5 w-5 text-blue-700" />
  <span className="text-blue-700 font-medium text-sm">Dashboard</span>
</button>

      <h1 className="text-3xl font-bold text-blue-800/70 flex items-center">
        <Settings className="h-6 w-6 mr-2 text-teal-600" /> Admin Portal
      </h1>

      <p className="text-gray-600">
        Welcome to your admin portal! Here you can manage users, configure settings, and monitor company-wide expenses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Cards */}
        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <Users className="h-6 w-6 text-blue-500" />
          <div>
            <p className="font-semibold">Manage Users</p>
            <p className="text-gray-500 text-sm">Add, remove, or edit user roles</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <FileText className="h-6 w-6 text-teal-500" />
          <div>
            <p className="font-semibold">Expense Overview</p>
            <p className="text-gray-500 text-sm">Monitor all company expenses</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <BarChart2 className="h-6 w-6 text-indigo-500" />
          <div>
            <p className="font-semibold">Analytics</p>
            <p className="text-gray-500 text-sm">Generate company-wide financial reports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
