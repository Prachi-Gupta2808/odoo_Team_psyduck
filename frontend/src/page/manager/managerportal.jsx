// page/managerportal.jsx
import React from 'react';
import { DollarSign, Calendar, FileText, Users } from 'lucide-react';

const ManagerPortal = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-800/70 flex items-center">
        <Users className="h-6 w-6 mr-2 text-teal-600" /> Manager Portal
      </h1>

      <p className="text-gray-600">
        Welcome to your manager portal! Here you can oversee team expenses, approve reports, and generate analytics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Cards */}
        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <FileText className="h-6 w-6 text-blue-500" />
          <div>
            <p className="font-semibold">Approve Expenses</p>
            <p className="text-gray-500 text-sm">Review and approve employee submissions</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <Calendar className="h-6 w-6 text-teal-500" />
          <div>
            <p className="font-semibold">Team Reports</p>
            <p className="text-gray-500 text-sm">View all team expense reports</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <DollarSign className="h-6 w-6 text-indigo-500" />
          <div>
            <p className="font-semibold">Analytics</p>
            <p className="text-gray-500 text-sm">Track team spending and trends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPortal;
