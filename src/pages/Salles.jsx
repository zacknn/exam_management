import React, { useState } from "react";
import CreateSalle from "./CreateSalle";

export default function SallesPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-black">Planification des Salles</h1>
          <p className="text-gray-600">Gérer les salles d'examen</p>
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-md"
        >
          + Ajouter une salle
        </button>
      </div>

      {/* Formulaire affiché ici */}
      {showForm && (
        <div className="mb-8">
          <CreateSalle onCancel={() => setShowForm(false)} />
        </div>
      )}

      {/* LISTE DES SALLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="bg-[#ebedf3] text-black p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">Salle 101</h2>
          <p className="text-gray-400">Bâtiment A – Étage 1</p>

          <p className="mt-4">
            Capacité: <span className="font-semibold">50 places</span>
          </p>

          <div className="mt-4">
            <span className="px-3 py-1 bg-green-600 text-white text-sm rounded">
              Disponible
            </span>
          </div>

          <div className="flex gap-4 mt-4 text-sm">
            <button className="flex items-center gap-2 text-blue-400">
              ✏️ Modifier
            </button>
            <button className="flex items-center gap-2 text-red-400">
              🗑️ Supprimer
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#ebedf3] text-black p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold">Salle 102</h2>
          <p className="text-gray-400">Bâtiment A – Étage 1</p>

          <p className="mt-4">
            Capacité: <span className="font-semibold">80 places</span>
          </p>

          <div className="mt-4">
            <span className="px-3 py-1 bg-red-600 text-white text-sm rounded">
              Occupée
            </span>
          </div>

          <div className="flex gap-4 mt-4 text-sm">
            <button className="flex items-center gap-2 text-blue-400">
              ✏️ Modifier
            </button>
            <button className="flex items-center gap-2 text-red-400">
              🗑️ Supprimer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
