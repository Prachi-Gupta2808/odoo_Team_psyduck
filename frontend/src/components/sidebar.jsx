import React, { useState } from 'react';
import { Calendar, Settings, Bell, Users, PieChart, Menu, X, User } from 'lucide-react';

const Sidebar = ({ title = "Ex-Tracker" }) => {
  const [isOpen, setIsOpen] = useState(false); // start collapsed
  const [activeItem, setActiveItem] = useState('Calendar');

  const navItems = [
    { name: 'Calendar', icon: Calendar },
    { name: 'Analytics', icon: PieChart },
    { name: 'Notifications', icon: Bell },
    { name: 'Team', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white  shadow-lg h-screen flex flex-col transition-all duration-300 relative
          ${isOpen ? 'w-64' : 'w-16'}
        `}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Profile / Brand */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <User className="h-8 w-8 text-blue-800/70" />
          {isOpen && (
            <div className="ml-3">
              <p className="text-blue-800/70  font-semibold text-sm">John Doe</p>
              <p className="text-gray-400 text-xs">Admin</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto mt-2 ">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center justify-left pl-5 py-3 mb-2 rounded-lg transition duration-150 cursor-pointer
                ${activeItem === item.name
                  ? 'bg-blue-800/70 text-white'
                  : 'text-blue-800/70 hover:bg-blue-800/20 hover:text-black'}
              `}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span className="ml-3">{item.name}</span>}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
