import { Routes, Route } from "react-router-dom";
import ExamLanding from "../pages/ExamLanding";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import CreateExam from "../pages/CreateExam";
import GroupePage from "../pages/GroupePage";
import Salle from "../pages/Salle";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ExamLanding />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/create-exam" element={<CreateExam />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard/Groups" element={<GroupePage />} />
      <Route path="/dashboard/Salles" element={<Salle />} />
      <Route path="*" element={<ExamLanding />} />
    </Routes>
  );
}

export default AppRoutes;
