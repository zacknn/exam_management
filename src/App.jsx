import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamLanding from "./pages/ExamLanding";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateExam from "./pages/CreateExam";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExamLanding />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="*" element={<ExamLanding />} />
        <Route path="/createExam" element={<CreateExam/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;