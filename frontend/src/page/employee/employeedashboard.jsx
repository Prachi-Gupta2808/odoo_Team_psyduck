// page/employeedashboard.jsx
import React, { useState } from "react";

const EmployeeDashboard = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Travel to Client Site", amount: 1200, status: "Pending" },
    { id: 2, description: "Office Supplies", amount: 500, status: "Approved" },
  ]);

  const [newExpense, setNewExpense] = useState({ description: "", amount: "" });

  // Submit new expense
  const handleSubmitExpense = () => {
    if (!newExpense.description || !newExpense.amount) return alert("Fill all fields");
    setExpenses([
      ...expenses,
      { ...newExpense, id: Date.now(), status: "Pending" }
    ]);
    setNewExpense({ description: "", amount: "" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Employee Dashboard</h1>

      {/* Submit New Expense */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="font-semibold mb-2">Submit New Expense</h2>
        <input
          type="text"
          placeholder="Expense Description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
          className="border p-2 rounded mr-2 mb-2 w-full md:w-auto"
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: Number(e.target.value) })}
          className="border p-2 rounded mr-2 mb-2 w-full md:w-auto"
        />
        <button
          onClick={handleSubmitExpense}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </div>

      {/* Expenses Table */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-4">Your Submitted Expenses</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Repayment</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(exp => (
              <tr key={exp.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{exp.description}</td>
                <td>${exp.amount}</td>
                <td
                  className={`font-semibold ${
                    exp.status === "Approved" ? "text-green-600" :
                    exp.status === "Rejected" ? "text-red-600" : "text-yellow-600"
                  }`}
                >
                  {exp.status}
                </td>
                <td>
                  {exp.status === "Approved" ? (
                    <span className="text-blue-600 font-medium">Repayment Scheduled</span>
                  ) : exp.status === "Rejected" ? (
                    <span className="text-gray-500">N/A</span>
                  ) : (
                    <span className="text-yellow-600">Waiting Approval</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
