import React from 'react'

import Table from '../components/ui/dashboard_ui/Table'
import DashboardLayaout from '../layouts/DashboardLayaout'
import { stats } from '../constant/fakeData'
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-20 pl-20 transition-all duration-500">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-4 text-gray-600">Welcome back, zack dev!</p>
          {/* Your page content here */}
          <Table stats={stats} />
        </div>
      </main>
    </div>
  )
}

export default Dashboard