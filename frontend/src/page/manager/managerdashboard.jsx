// page/managerdashboard.jsx
import React, { useState } from "react";

const ManagerDashboard = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, employee: "John Doe", amount: 2500, description: "Travel Reimbursement", status: "Pending" },
    { id: 2, employee: "Jane Smith", amount: 1800, description: "Office Supplies", status: "Pending" },
  ]);

  // Approve expense
  const handleApprove = (id) => {
    setExpenses(expenses.map(e => e.id === id ? { ...e, status: "Approved" } : e));
  };

  // Reject expense
  const handleReject = (id) => {
    setExpenses(expenses.map(e => e.id === id ? { ...e, status: "Rejected" } : e));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-purple-800 mb-6">Manager Dashboard - Expense Approvals</h1>

      {/* Expense Table */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-4">Pending Expenses</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Employee</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{expense.employee}</td>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.status}</td>
                <td className="space-x-2">
                  {expense.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(expense.id)}
                        className="text-sm text-green-600 hover:underline"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(expense.id)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Stats */}
      <div className="bg-white p-4 rounded shadow mt-6">
        <h2 className="font-semibold mb-2">Analytics</h2>
        <p>Total Expenses: {expenses.length}</p>
        <p>Approved: {expenses.filter(e => e.status === "Approved").length}</p>
        <p>Rejected: {expenses.filter(e => e.status === "Rejected").length}</p>
        <p>Pending: {expenses.filter(e => e.status === "Pending").length}</p>
      </div>
    </div>
  );
};

export default ManagerDashboard;
