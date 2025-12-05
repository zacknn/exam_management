import React, { useState } from "react";
import { CalendarClock, Plus, Edit, Trash2 } from "lucide-react";

export default function Examens() {
  const [showForm, setShowForm] = useState(false);

  const [examens] = useState([
    {
      id: 1,
      sujet: "Mathématiques L1",
      date: "10 Jan 2025",
      heure: "09:00",
      duree: "2h",
      capacite: "80 places",
      statut: "Validé",
    },
    {
      id: 2,
      sujet: "Physique L1",
      date: "12 Jan 2025",
      heure: "14:00",
      duree: "3h",
      capacite: "120 places",
      statut: "En attente",
    },
    {
      id: 3,
      sujet: "Chimie L2",
      date: "15 Jan 2025",
      heure: "10:00",
      duree: "2h30",
      capacite: "60 places",
      statut: "Planifié",
    },
  ]);

  return (
    <div className="p-8 bg-white min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
            <CalendarClock className="w-9 h-9 text-blue-600" />
            Planification des Examens
          </h1>
          <p className="text-gray-500 mt-2">Créer et gérer les examens</p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          Ajouter un examen
        </button>
      </div>

      {/* FORMULAIRE (apparait dans la même page) */}
      {showForm && (
        <div className="bg-white border rounded-2xl shadow p-8 mb-10">

          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Ajouter un nouvel examen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-gray-700 font-medium mb-2">Sujet</label>
              <input
                type="text"
                placeholder="Ex: Mathématiques L1"
                className="w-full p-3 border rounded-xl bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-xl bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Heure</label>
              <input
                type="time"
                className="w-full p-3 border rounded-xl bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Durée</label>
              <input
                type="text"
                placeholder="Ex: 2h30"
                className="w-full p-3 border rounded-xl bg-gray-100"
              />
            </div>

          </div>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">
              Créer
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      {/* TABLEAU */}
      <div className="bg-white border rounded-2xl shadow p-8">

        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Liste des Examens
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="pb-4">Sujet</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Heure</th>
              <th className="pb-4">Durée</th>
              <th className="pb-4">Capacité</th>
              <th className="pb-4">Statut</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {examens.map((exam) => (
              <tr key={exam.id} className="border-b">
                <td className="py-4">{exam.sujet}</td>
                <td>{exam.date}</td>
                <td>{exam.heure}</td>
                <td>{exam.duree}</td>
                <td>{exam.capacite}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-xl text-sm ${
                      exam.statut === "Validé"
                        ? "bg-green-100 text-green-600"
                        : exam.statut === "En attente"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {exam.statut}
                  </span>
                </td>

                <td className="flex gap-4">
                  <Edit className="text-blue-600 cursor-pointer" />
                  <Trash2 className="text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
