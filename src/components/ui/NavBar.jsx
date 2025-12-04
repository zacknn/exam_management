// components/Navbar.jsx
import React from 'react';
import NotificationButton from './NotificationButton';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-20 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center px-6 gap-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition"
          />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-3">
        <NotificationButton />
        <DarkModeToggle />
        
        {/* Planner Button (optional) */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm font-medium">
          <span className="text-gray-600">Planner</span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">zack dev</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
            Z
          </div>
        </div>
      </div>
    </div>
  );
}