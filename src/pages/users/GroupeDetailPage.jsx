// src/pages/GroupeDetailPage.jsx
import { Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Users } from "lucide-react";
import { fetchGroupeDetailResource } from "../../resources/groupeDetailResource";

function StudentList({ students }) {
  if (students.length === 0) {
    return (
      <p className="text-gray-500 text-center py-10">
        Aucun étudiant dans ce groupe.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-white p-5 rounded-lg shadow border text-center"
        >
          <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
            {student.nom.charAt(0)}
          </div>
          <h4 className="font-semibold text-lg">{student.nom}</h4>
          <p className="text-gray-600 text-sm">{student.email}</p>
        </div>
      ))}
    </div>
  );
}

function GroupeDetail() {
  const { groupId } = useParams();
  const groupe = fetchGroupeDetailResource(groupId);

  return (
    <div className="max-w-6xl mx-auto">
      <Link
        to="/dashboard/Groups"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft size={20} /> Retour aux groupes
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          {groupe.libelle}
        </h1>
        <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
          <Users size={24} /> {groupe.students.length} étudiant
          {groupe.students.length > 1 ? "s" : ""}
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Liste des Étudiants
      </h2>
      <StudentList students={groupe.students} />
    </div>
  );
}

export default function GroupeDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <Suspense
        fallback={
          <div className="text-center py-20">Chargement du groupe...</div>
        }
      >
        <GroupeDetail />
      </Suspense>
    </div>
  );
}
