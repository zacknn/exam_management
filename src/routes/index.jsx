import { Routes, Route } from "react-router-dom";
import ExamLanding from "../pages/ExamLanding";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import GroupePage from "../pages/GroupePage";
import Salles from "../pages/Salles";
import Surveillants from "../pages/Surveillants";
import Examens from "../pages/Examens";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ExamLanding />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/*<Route path="/dashboard/create-exam" element={<CreateExam />} />*/}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard/Groups" element={<GroupePage />} />
      <Route path="/dashboard/Salles" element={<Salles/>} />
     <Route path="/dashboard/Examens" element={<Examens/>} />
      <Route path="*" element={<ExamLanding />} />
      <Route path="/dashboard/Surveillants" element={<Surveillants/>} />

      {/*<Route path="/create-salle" element={<CreateSalle />} />  */}

      
      
    </Routes>
  );
}

export default AppRoutes;
