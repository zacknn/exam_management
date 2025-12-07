import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarPlus,
 Building,
 UserCheck,   
  BookOpen,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { Icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { Icon: Users, label: "Users", href: "/dashboard/users" },
    { Icon: CalendarPlus, label: "Examens", href: "/dashboard/Examens" },
    { Icon: Building, label: "Sales", href: "/dashboard/Salles" },
    { Icon: BookOpen, label: "Matières", href: "/dashboard/Groups" },
    { Icon: UserCheck, label: "Surveillants", href: "/dashboard/Surveillants" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition lg:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white shadow-2xl transition-all duration-500 ease-in-out z-40 flex flex-col ${
          isOpen ? "w-64" : "w-20"
        } pt-20 lg:pt-6`}
      >
        {/* Close button inside (mobile only) */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Menu Items */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item, index) => {
            const Icon = item.Icon;
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/" &&
                location.pathname.startsWith(item.href + "/")) ||
              location.pathname.startsWith(item.href);

            return (
              <button
                key={index}
                onClick={() => {
                  navigate(item.href);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-green-50 text-green-600"
                      : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                  } hover:translate-x-1`}
              >
                <Icon
                  className={`w-6 h-6 shrink-0 ${
                    isActive ? "text-green-600" : ""
                  }`}
                />

                <span
                  className={`font-medium transition-all duration-500 whitespace-nowrap overflow-hidden
                    ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
                >
                  {item.label}
                </span>

                {/* Active dot */}
                {isActive && isOpen && (
                  <div className="ml-auto w-2 h-2 bg-green-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-4 pb-8">
          <button className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300 group hover:translate-x-1">
            <LogOut className="w-6 h-6 shrink-0" />
            <span
              className={`font-medium transition-all duration-500 whitespace-nowrap overflow-hidden
                ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
