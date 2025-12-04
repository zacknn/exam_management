import React from "react";
import Sidebar from "../components/ui/SideBar";
import Navbar from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex">
      {/* Sidebar stays fixed */}
      <Sidebar />
      <div className="flex-1">
        {/* Navbar stays fixed */}
        <Navbar />
        {/* This is where child pages will render */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
