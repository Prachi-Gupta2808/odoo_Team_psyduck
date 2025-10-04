import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  TrendingUp,
  DollarSign,
  User,
  FileText,
} from "lucide-react";

const Navbar = ({ title = "Ex-Tracker" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Dashboard", href: "#dashboard", icon: TrendingUp },
    { name: "Transactions", href: "#transactions", icon: DollarSign },
    { name: "Reports", href: "#reports", icon: FileText },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-[#527ae6] to-gray-900 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-extrabold text-white tracking-wider">
              {title}
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex ml-10 items-baseline space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-100 hover:text-blue-800/70 flex items-center"
              >
                <item.icon className="h-4 w-4 mr-1" />
                {item.name}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700/80 text-white font-semibold py-1.5 px-4 rounded-lg text-sm shadow-md flex items-center">
              <User className="h-4 w-4 inline mr-1" /> Profile
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-white hover:text-white hover:bg-blue-600/70"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-lg text-base font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-800/70 items-center"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleMenu}
            className="w-full text-left bg-blue-600/60 hover:bg-blue-700/60 text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center mt-1"
          >
            <User className="h-5 w-5 inline mr-2" /> Profile
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
