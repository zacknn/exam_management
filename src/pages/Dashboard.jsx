import React from 'react'
import Sidebar from '../components/ui/SideBar'
import Navbar from '../components/ui/NavBar'
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - always visible */}
      <Sidebar />

      {/* Navbar - starts after sidebar */}
      <Navbar />

      {/* Main Content - offset by sidebar */}
      <main className="pt-20 pl-20 transition-all duration-500">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-4 text-gray-600">Welcome back, zack dev!</p>
          
          {/* Your page content here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">1,234</p>
            </div>
            {/* More cards... */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard