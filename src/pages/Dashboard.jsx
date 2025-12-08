import React from "react";
import Table from "../components/ui/dashboard_ui/Table";
import { stats } from "../constant/fakeData";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-20 pl-20 transition-all duration-500">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-4 text-gray-600">Welcome back, zack dev!</p>
          <div className="mt-6 flex justify-end">
            <Link to={"/dashboard/CreateExam"}>
              <button className="bg-gray-300 rounded-2xl p-4 hover:bg-gray-600 duration-100 transition">Create Exam</button>
            </Link>
            <Link to={''}>
              <button className="bg-gray-100 rounded-2xl p-4 ml-4 hover:bg-gray-600 duration-100 transition">Modify Exam</button>
            </Link>
          </div>

          {/* Your page content here */}
          <Table stats={stats} />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
