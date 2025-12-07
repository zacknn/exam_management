// src/components/GroupeCard.jsx
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export default function GroupeCard({ groupe }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{groupe.libelle}</h3>
          <p className="text-gray-600">Niveau: {groupe.niveau}</p>
        </div>
        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {groupe.students.length} étudiants
        </div>
      </div>

      <Link to={`/dashboard/Groups/${groupe.id}`}>
        <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition flex items-center justify-center gap-2">
          <Users size={20} />
          Voir les étudiants
        </button>
      </Link>
    </div>
  );
}
