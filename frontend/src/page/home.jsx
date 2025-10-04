// page/Home.jsx
import React, { useState } from 'react';
import { Calendar, PieChart, Bell, Users, Settings } from 'lucide-react';
import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Calendar');

  const tabs = [
    { name: 'Calendar', icon: Calendar },
    { name: 'Analytics', icon: PieChart },
    { name: 'Notifications', icon: Bell },
    { name: 'Team', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  // Sample data for analytics pie chart
  const pieData = [
    { name: 'Food', value: 400 },
    { name: 'Travel', value: 300 },
    { name: 'Shopping', value: 300 },
    { name: 'Others', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Sample notifications
  const notifications = [
    'New expense added: $45 for groceries',
    'Monthly report ready to view',
    'Password changed successfully',
  ];

  // Sample team members
  const team = [
    { name: 'Alice', role: 'Manager', email: 'alice@example.com' },
    { name: 'Bob', role: 'Developer', email: 'bob@example.com' },
    { name: 'Charlie', role: 'Designer', email: 'charlie@example.com' },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-blue-800/70 mb-4">Dashboard</h1>

      {/* Tabs */}
      <div className="flex space-x-3 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium text-sm transition
                ${activeTab === tab.name 
                  ? 'bg-blue-800/70 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <div className="p-6 bg-white rounded-lg shadow-md min-h-[300px]">
        {activeTab === 'Calendar' && (
          <div>
            <p className="mb-2 font-semibold">This Month</p>
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
              <thead>
                <tr>
                  {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                    <th key={d} className="border px-2 py-1 bg-gray-100">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i}>
                    {[...Array(7)].map((_, j) => (
                      <td key={j} className="border px-2 py-1 h-10 text-center">{i*7+j+1}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Analytics' && (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === 'Notifications' && (
          <ul className="list-disc list-inside space-y-1">
            {notifications.map((note, idx) => (
              <li key={idx} className="text-gray-700">{note}</li>
            ))}
          </ul>
        )}

        {activeTab === 'Team' && (
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                {['Name','Role','Email'].map(h => <th key={h} className="border px-2 py-1">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {team.map((member, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-2 py-1">{member.name}</td>
                  <td className="border px-2 py-1">{member.role}</td>
                  <td className="border px-2 py-1">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'Settings' && (
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between">
              <span>Auto Backup</span>
              <input type="checkbox" className="h-4 w-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
