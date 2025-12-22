import React, { useState } from "react";
import { Calendar, Edit2, Trash2 } from "lucide-react";
import { DataTable } from "../components/DataTable";

export default function LanneeAcadimic() {
  const [years, setYears] = useState([
    { 
      id: 1, 
      year: "2024-2025", 
      start: "2024-09-01", 
      end: "2025-06-30", 
      status: "Active",
      semestres: 2,
      etudiants: 1200
    },
    { 
      id: 2, 
      year: "2023-2024", 
      start: "2023-09-01", 
      end: "2024-06-30", 
      status: "Archivée",
      semestres: 2,
      etudiants: 1150
    },
    { 
      id: 3, 
      year: "2022-2023", 
      start: "2022-09-01", 
      end: "2023-06-30", 
      status: "Archivée",
      semestres: 2,
      etudiants: 1100
    },
    { 
      id: 4, 
      year: "2025-2026", 
      start: "2025-09-01", 
      end: "2026-06-30", 
      status: "Planifiée",
      semestres: 2,
      etudiants: 0
    },
  ]);

  const [modal, setModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ 
    year: "", 
    start: "", 
    end: "", 
    status: "Active",
    semestres: 2,
    etudiants: 0
  });

  const columns = [
    { 
      key: "year", 
      label: "Année académique", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "start", 
      label: "Date de début", 
      sortable: true 
    },
    { 
      key: "end", 
      label: "Date de fin", 
      sortable: true 
    },
    { 
      key: "semestres", 
      label: "Semestres", 
      sortable: true,
      render: (item) => (
        <span className="font-semibold text-blue-600">{item.semestres}</span>
      )
    },
    { 
      key: "etudiants", 
      label: "Étudiants", 
      sortable: true,
      render: (item) => (
        <span className="font-medium text-gray-700">{item.etudiants.toLocaleString()}</span>
      )
    },
    { 
      key: "status", 
      label: "Statut", 
      sortable: true,
      filterable: true,
      render: (item) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          item.status === "Active"
            ? "bg-green-100 text-green-800"
            : item.status === "Planifiée"
            ? "bg-blue-100 text-blue-800"
            : "bg-gray-100 text-gray-800"
        }`}>
          {item.status}
        </span>
      )
    }
  ];

  const openAdd = () => {
    setEditingId(null);
    setForm({ 
      year: "", 
      start: "", 
      end: "", 
      status: "Active",
      semestres: 2,
      etudiants: 0
    });
    setModal(true);
  };

  const openEdit = (year) => {
    setEditingId(year.id);
    setForm({ 
      year: year.year, 
      start: year.start, 
      end: year.end, 
      status: year.status,
      semestres: year.semestres,
      etudiants: year.etudiants
    });
    setModal(true);
  };

  const save = () => {
    if (!form.year || !form.start || !form.end) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (editingId !== null) {
      setYears(
        years.map(y =>
          y.id === editingId ? { ...y, ...form } : y
        )
      );
    } else {
      setYears([
        {
          id: Date.now(),
          ...form,
        },
        ...years,
      ]);
    }
    setModal(false);
  };

  const remove = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette année académique ?")) {
      setYears(years.filter(y => y.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === "semestres" || name === "etudiants" ? parseInt(value) || 0 : value
    }));
  };

  const actions = (item) => (
    <div className="flex gap-2">
      <button
        onClick={(e) => {
          e.stopPropagation();
          openEdit(item);
        }}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
        title="Modifier"
      >
        <Edit2 className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          remove(item.id);
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
            <Calendar className="w-8 h-8 text-blue-600" />
            Gestion des Années Académiques
          </h1>
          <p className="text-gray-600">Créez et gérez les années académiques de votre institution</p>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-6">
              {editingId ? "Modifier l'année académique" : "Ajouter une année académique"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Année académique *</label>
                <input
                  type="text"
                  name="year"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="2024-2025"
                  value={form.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Statut *</label>
                <select
                  name="status"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Planifiée">Planifiée</option>
                  <option value="Archivée">Archivée</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date début *</label>
                <input
                  type="date"
                  name="start"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.start}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date fin *</label>
                <input
                  type="date"
                  name="end"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.end}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nombre de semestres</label>
                <input
                  type="number"
                  name="semestres"
                  min="1"
                  max="4"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.semestres}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nombre d'étudiants</label>
                <input
                  type="number"
                  name="etudiants"
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.etudiants}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
              <button
                onClick={() => setModal(false)}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition duration-300"
              >
                Annuler
              </button>
              <button
                onClick={save}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
              >
                {editingId ? "Modifier" : "Ajouter"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DataTable */}
      <DataTable
        data={years}
        columns={columns}
        title="Années Académiques"
        description={`${years.length} année(s) académique(s) enregistrée(s)`}
        searchable={true}
        filterable={true}
        pagination={true}
        itemsPerPageOptions={[5, 10, 25]}
        onRowClick={(year) => {
          console.log("Année sélectionnée:", year);
          // Vous pourriez naviguer vers une page de détail
        }}
        actions={actions}
        onAdd={openAdd}
        addButtonText="Nouvelle année académique"
      />

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Année active</h3>
          <div className="text-3xl font-bold text-blue-600">
            {years.find(y => y.status === "Active")?.year || "Aucune"}
          </div>
          <p className="text-gray-600 text-sm mt-2">
            {years.filter(y => y.status === "Active").length} année(s) active(s)
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total étudiants</h3>
          <div className="text-3xl font-bold text-green-600">
            {years.reduce((total, y) => total + y.etudiants, 0).toLocaleString()}
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Moyenne: {Math.round(years.reduce((total, y) => total + y.etudiants, 0) / years.length).toLocaleString()}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Répartition</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-green-600">● Actives</span>
              <span className="font-medium">
                {years.filter(y => y.status === "Active").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-600">● Planifiées</span>
              <span className="font-medium">
                {years.filter(y => y.status === "Planifiée").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">● Archivées</span>
              <span className="font-medium">
                {years.filter(y => y.status === "Archivée").length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}