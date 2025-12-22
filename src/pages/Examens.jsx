import React, { useState } from "react";
import { CalendarClock, Edit, Trash2 } from "lucide-react";
import { DataTable } from "../components/DataTable";

export default function Examens() {
  const [showForm, setShowForm] = useState(false);
  const [examens, setExamens] = useState([
    {
      id: 1,
      sujet: "Mathématiques L1",
      date: "2025-01-10",
      heure: "09:00",
      duree: "2h",
      capacite: 80,
      statut: "Validé",
      type: "Partiel",
      salle: "A101"
    },
    {
      id: 2,
      sujet: "Physique L1",
      date: "2025-01-12",
      heure: "14:00",
      duree: "3h",
      capacite: 120,
      statut: "En attente",
      type: "Contrôle",
      salle: "B202"
    },
    {
      id: 3,
      sujet: "Chimie L2",
      date: "2025-01-15",
      heure: "10:00",
      duree: "2h30",
      capacite: 60,
      statut: "Planifié",
      type: "Rattrapage",
      salle: "C303"
    },
  ]);

  const columns = [
    { 
      key: "sujet", 
      label: "Sujet", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "date", 
      label: "Date", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "heure", 
      label: "Heure", 
      sortable: true 
    },
    { 
      key: "duree", 
      label: "Durée", 
      sortable: true 
    },
    { 
      key: "capacite", 
      label: "Capacité", 
      sortable: true 
    },
    { 
      key: "type", 
      label: "Type", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "salle", 
      label: "Salle", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "statut", 
      label: "Statut", 
      sortable: true,
      filterable: true,
      render: (item) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          item.statut === "Validé"
            ? "bg-green-100 text-green-800"
            : item.statut === "En attente"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-blue-100 text-blue-800"
        }`}>
          {item.statut}
        </span>
      )
    }
  ];

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet examen ?")) {
      setExamens(examens.filter(exam => exam.id !== id));
    }
  };

  const handleEdit = (examen) => {
    // Logique d'édition
    console.log("Éditer:", examen);
  };

  const actions = (item) => (
    <div className="flex gap-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleEdit(item);
        }}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
        title="Modifier"
      >
        <Edit className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(item.id);
        }}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition duration-300"
        title="Supprimer"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#ebedf3] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <CalendarClock className="w-8 h-8 text-blue-600" />
            Planification des Examens
          </h1>
          <p className="text-gray-600">Créer et gérer les examens</p>
        </div>
      </div>

      {/* Formulaire modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">Ajouter un nouvel examen</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Formulaire inchangé */}
              <div className="md:col-span-2 flex gap-4">
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
            </form>
          </div>
        </div>
      )}

      {/* DataTable avec filtres et pagination */}
      <DataTable
        data={examens}
        columns={columns}
        title="Liste des Examens"
        description={`${examens.length} examen(s) planifié(s)`}
        searchable={true}
        filterable={true}
        pagination={true}
        itemsPerPageOptions={[5, 10, 25]}
        onRowClick={(examen) => console.log("Examen sélectionné:", examen)}
        actions={actions}
        onAdd={() => setShowForm(true)}
        addButtonText="Ajouter un examen"
      />
    </div>
  );
}