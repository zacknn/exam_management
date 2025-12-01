import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamLanding from "./pages/ExamLanding";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExamLanding />} />
        <Route
          path="/dashboard"
          element={<div className="p-10 text-3xl">{<Dashboard/>}</div>}
        />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ExamLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
