import Sidebar from "../components/ui/SideBar";
import Navbar from "../components/ui/NavBar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen m-10 bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1">
        <Navbar />

        {/* Dynamic page content */}
        <main className="pt-20 px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
