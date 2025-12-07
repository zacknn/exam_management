// src/pages/CreateExam.jsx
import ExamForm from "../components/ui/exams/ExamForm";

export default function CreateExam() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Exam</h1>
        <ExamForm />
      </div>
    </div>
  );
}