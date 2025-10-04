// page/employeeportal.jsx
import React from 'react';
import { DollarSign, Calendar, FileText } from 'lucide-react';

const EmployeePortal = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-800/70 flex items-center">
        <DollarSign className="h-6 w-6 mr-2 text-teal-600" /> Employee Portal
      </h1>

      <p className="text-gray-600">
        Welcome to your portal! Here you can manage your expenses, track reimbursements, and view your reports.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Cards */}
        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <FileText className="h-6 w-6 text-blue-500" />
          <div>
            <p className="font-semibold">Submit Expense</p>
            <p className="text-gray-500 text-sm">Create new expense reports</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <Calendar className="h-6 w-6 text-teal-500" />
          <div>
            <p className="font-semibold">View Reports</p>
            <p className="text-gray-500 text-sm">Check your past submissions</p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-3">
          <DollarSign className="h-6 w-6 text-indigo-500" />
          <div>
            <p className="font-semibold">Reimbursement Status</p>
            <p className="text-gray-500 text-sm">Track pending and approved payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePortal;
