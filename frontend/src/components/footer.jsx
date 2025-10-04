// components/footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa'; // GitHub icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-blue-300/70 mb-2">Ex-Tracker</h2>
          <p className="text-gray-300 text-sm">
            Ex-Tracker helps you manage your expenses, track transactions, and visualize your financial data efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-blue-300/70 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-blue-800/50 transition-colors">Home</a></li>
            <li><a href="#dashboard" className="hover:text-blue-800/50 transition-colors">Dashboard</a></li>
            <li><a href="#transactions" className="hover:text-blue-800/50 transition-colors">Transactions</a></li>
            <li><a href="#reports" className="hover:text-blue-800/50 transition-colors">Reports</a></li>
          </ul>
        </div>

        {/* Resources / Support */}
        <div>
          <h3 className="text-blue-300/70 font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#faq" className="hover:text-blue-800/50 transition-colors">FAQ</a></li>
            <li><a href="#help" className="hover:text-blue-800/50 transition-colors">Help Center</a></li>
            <li><a href="#contact" className="hover:text-blue-800/50 transition-colors">Contact Support</a></li>
            <li><a href="#privacy" className="hover:text-blue-800/50 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-blue-300/70 font-semibold mb-2">Connect</h3>
          <div className="flex space-x-3 mb-2">
            <a href="#" className="text-blue-300/70 hover:text-blue-800/50 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-blue-300/70 hover:text-blue-800/50 transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-blue-300/70 hover:text-blue-800/50 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-blue-300/70 hover:text-blue-800/50 transition-colors"><FaGithub className="h-5 w-5" /></a>
          </div>
          <div className="text-gray-300 text-sm space-y-1">
            <div className="flex items-center"><Mail className="h-4 w-4 mr-1" /> support@extracker.com</div>
            <div className="flex items-center"><Phone className="h-4 w-4 mr-1" /> +91 123 456 7890</div>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 text-gray-400 text-xs text-center py-4">
        © {new Date().getFullYear()} Ex-Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
