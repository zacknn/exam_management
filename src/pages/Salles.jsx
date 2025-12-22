import React, { useState } from "react";
import { Building, Edit2, Trash2 } from "lucide-react";
import { DataTable } from "../components/DataTable";
import CreateSalle from "./CreateSalle";

export default function SallesPage() {
  const [showForm, setShowForm] = useState(false);
  const [salles, setSalles] = useState([
    { id: 1, nom: "Salle 101", batiment: "A", etage: "1", capacite: 50, disponible: true },
    { id: 2, nom: "Salle 102", batiment: "A", etage: "1", capacite: 80, disponible: false },
    { id: 3, nom: "Salle 201", batiment: "B", etage: "2", capacite: 120, disponible: true },
    { id: 4, nom: "Salle 202", batiment: "B", etage: "2", capacite: 60, disponible: true },
    { id: 5, nom: "Amphithéâtre", batiment: "C", etage: "0", capacite: 300, disponible: true },
  ]);

  const columns = [
    { 
      key: "nom", 
      label: "Nom de la salle", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "batiment", 
      label: "Bâtiment", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "etage", 
      label: "Étage", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "capacite", 
      label: "Capacité", 
      sortable: true,
      render: (item) => (
        <span className="font-semibold">{item.capacite} places</span>
      )
    },
    { 
      key: "disponible", 
      label: "Statut", 
      sortable: true,
      filterable: true,
      render: (item) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          item.disponible 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {item.disponible ? "Disponible" : "Occupée"}
        </span>
      )
    }
  ];

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette salle ?")) {
      setSalles(salles.filter(salle => salle.id !== id));
    }
  };

  const handleEdit = (salle) => {
    console.log("Éditer salle:", salle);
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
        <Edit2 className="w-4 h-4" />
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
            <Building className="w-8 h-8 text-blue-600" />
            Planification des Salles
          </h1>
          <p className="text-gray-600">Gérer les salles d'examen</p>
        </div>
      </div>

      {/* Formulaire modal */}
      {showForm && (
        <div className="mb-8">
          <CreateSalle 
            onCancel={() => setShowForm(false)}
            onAdd={(newSalle) => {
              setSalles([...salles, { ...newSalle, id: salles.length + 1 }]);
              setShowForm(false);
            }}
          />
        </div>
      )}

      {/* DataTable */}
      <DataTable
        data={salles}
        columns={columns}
        title="Liste des Salles"
        description={`${salles.length} salle(s) disponible(s)`}
        searchable={true}
        filterable={true}
        pagination={true}
        itemsPerPageOptions={[5, 10, 25]}
        onRowClick={(salle) => console.log("Salle sélectionnée:", salle)}
        actions={actions}
        onAdd={() => setShowForm(true)}
        addButtonText="Ajouter une salle"
      />
    </div>
  );
}