import { Routes, Route } from "react-router-dom";

import ExamLanding from "../pages/ExamLanding";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

import DashboardLayout from "../layouts/DashboardLayaout"; 

import Dashboard from "../pages/Dashboard";
import GroupePage from "../pages/users/GroupePage";
import GroupeDetailPage from "../pages/users/GroupeDetailPage";
import Salles from "../pages/Salles";
import Surveillants from "../pages/Surveillants";
import Examens from "../pages/Examens";
import TeachersPage from "../pages/users/TeacherPage";
import CreateExam from "../pages/CreateExam";
function AppRoutes() {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<ExamLanding />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      
      {/* Dashboard layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        
        {/* Default dashboard page */}
        <Route index element={<Dashboard />} />

        {/* Nested dashboard pages */}
        <Route path="Groups" element={<GroupePage />} />
        <Route path="Groups/:groupId" element={<GroupeDetailPage />} />
        <Route path="Salles" element={<Salles />} />
        <Route path="Examens" element={<Examens />} />
        <Route path="Surveillants" element={<Surveillants />} />
        <Route path="users" element={<TeachersPage />} />
        <Route path="CreateExam" element={<CreateExam />} />
        
  
        
      </Route>

      {/* Fallback */}
      <Route path="*" element={<ExamLanding />} />
    </Routes>
  );
}

export default AppRoutes;
