// src/components/TeacherCard.jsx
export default function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
          {teacher.nom.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{teacher.nom}</h3>
          <p className="text-gray-600">{teacher.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
          Enseignant
        </span>
      </div>
    </div>
  );
}