import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamLanding from "./pages/ExamLanding";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExamLanding />} />
        <Route path="/dashboard" element={<div className="p-10 text-3xl">Dashboard (Coming Soon)</div>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="*" element={<ExamLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;