// src/components/exams/AvailabilityBadge.jsx
export default function AvailabilityBadge({ available }) {
  return (
    <span
      className={`ml-2 text-xs font-medium px-2 py-0.5 rounded ${
        available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {available ? "Available" : "Conflict"}
    </span>
  );
}
