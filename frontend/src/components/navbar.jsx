import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Home, TrendingUp, DollarSign, User, FileText } from "lucide-react";

const Navbar = ({ title = "Ex-Tracker" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    

  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href) => {
    if (href.startsWith("/")) {
      navigate(href); // Navigate to portal route
    } else {
      window.location.href = href; // For external or hash links
    }
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <nav className="bg-gradient-to-r from-[#1e3b8a] to-gray-900 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-extrabold text-white tracking-wider">{title}</span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex ml-10 items-baseline space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-blue-100 hover:text-blue-800/70 flex items-center"
              >
                <item.icon className="h-4 w-4 mr-1" />
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-white hover:text-white hover:bg-blue-600/70"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-blue-600 hover:bg-blue-100 hover:text-blue-800/70 flex items-center"
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
