// src/components/exams/ConflictAlert.jsx
export default function ConflictAlert({ show }) {
  if (!show) return null;
  return (
    <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6">
      Conflict detected! One or more resources are already booked at this time.
    </div>
  );
}
