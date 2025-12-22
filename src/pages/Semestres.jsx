import React, { useState } from "react";
import { Calendar, Edit2, Trash2, BookOpen, CalendarDays } from "lucide-react";
import { DataTable } from "../components/DataTable";

export default function Semestres() {
  const [semesters, setSemesters] = useState([
    { 
      id: 1, 
      year: "2024-2025", 
      name: "Semestre 1", 
      start: "2024-09-01", 
      end: "2024-12-31", 
      weeks: 14,
      exams: 12,
      status: "En cours"
    },
    { 
      id: 2, 
      year: "2024-2025", 
      name: "Semestre 2", 
      start: "2025-01-01", 
      end: "2025-06-30", 
      weeks: 14,
      exams: 10,
      status: "Planifié"
    },
    { 
      id: 3, 
      year: "2023-2024", 
      name: "Semestre 1", 
      start: "2023-09-01", 
      end: "2023-12-31", 
      weeks: 14,
      exams: 15,
      status: "Terminé"
    },
    { 
      id: 4, 
      year: "2023-2024", 
      name: "Semestre 2", 
      start: "2024-01-01", 
      end: "2024-06-30", 
      weeks: 14,
      exams: 12,
      status: "Terminé"
    },
    { 
      id: 5, 
      year: "2022-2023", 
      name: "Semestre 1", 
      start: "2022-09-01", 
      end: "2022-12-31", 
      weeks: 14,
      exams: 14,
      status: "Archivé"
    },
    { 
      id: 6, 
      year: "2025-2026", 
      name: "Semestre 1", 
      start: "2025-09-01", 
      end: "2025-12-31", 
      weeks: 14,
      exams: 0,
      status: "Planifié"
    },
  ]);

  const [modal, setModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    year: "2024-2025",
    name: "",
    start: "",
    end: "",
    weeks: 14,
    exams: 0,
    status: "Planifié"
  });

  const columns = [
    { 
      key: "year", 
      label: "Année", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "name", 
      label: "Semestre", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "start", 
      label: "Date début", 
      sortable: true 
    },
    { 
      key: "end", 
      label: "Date fin", 
      sortable: true 
    },
    { 
      key: "weeks", 
      label: "Durée", 
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-blue-500" />
          <span className="font-medium">{item.weeks} semaines</span>
        </div>
      )
    },
    { 
      key: "exams", 
      label: "Examens", 
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-purple-500" />
          <span className={`font-medium ${item.exams > 0 ? 'text-purple-700' : 'text-gray-500'}`}>
            {item.exams} examen(s)
          </span>
        </div>
      )
    },
    { 
      key: "status", 
      label: "Statut", 
      sortable: true,
      filterable: true,
      render: (item) => {
        let bgColor, textColor;
        switch(item.status) {
          case "En cours":
            bgColor = "bg-green-100";
            textColor = "text-green-800";
            break;
          case "Planifié":
            bgColor = "bg-blue-100";
            textColor = "text-blue-800";
            break;
          case "Terminé":
            bgColor = "bg-gray-100";
            textColor = "text-gray-800";
            break;
          case "Archivé":
            bgColor = "bg-purple-100";
            textColor = "text-purple-800";
            break;
          default:
            bgColor = "bg-gray-100";
            textColor = "text-gray-800";
        }
        
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
            {item.status}
          </span>
        );
      }
    }
  ];

  const openAdd = () => {
    setEditingId(null);
    setForm({
      year: "2024-2025",
      name: "",
      start: "",
      end: "",
      weeks: 14,
      exams: 0,
      status: "Planifié"
    });
    setModal(true);
  };

  const openEdit = (semester) => {
    setEditingId(semester.id);
    setForm({
      year: semester.year,
      name: semester.name,
      start: semester.start,
      end: semester.end,
      weeks: semester.weeks,
      exams: semester.exams,
      status: semester.status
    });
    setModal(true);
  };

  const save = () => {
    if (!form.name || !form.start || !form.end) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (editingId !== null) {
      setSemesters(
        semesters.map(s =>
          s.id === editingId ? { ...s, ...form } : s
        )
      );
    } else {
      setSemesters([
        {
          id: Date.now(),
          ...form,
        },
        ...semesters,
      ]);
    }
    setModal(false);
  };

  const remove = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce semestre ?")) {
      setSemesters(semesters.filter(s => s.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === "weeks" || name === "exams" ? parseInt(value) || 0 : value
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

  // Regrouper les semestres par année pour l'affichage
  const years = [...new Set(semesters.map(s => s.year))].sort().reverse();

  return (
    <div className="min-h-screen bg-[#ebedf3] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-blue-600" />
            Gestion des Semestres
          </h1>
          <p className="text-gray-600">Organisez les semestres pour chaque année académique</p>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-6">
              {editingId ? "Modifier le semestre" : "Ajouter un semestre"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Année académique *</label>
                <select
                  name="year"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.year}
                  onChange={handleChange}
                  required
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                  <option value="2025-2026">2025-2026</option>
                  <option value="2026-2027">2026-2027</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nom du semestre *</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Semestre 1"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
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
                <label className="block text-gray-700 font-medium mb-2">Nombre de semaines</label>
                <input
                  type="number"
                  name="weeks"
                  min="1"
                  max="20"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.weeks}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Statut</label>
                <select
                  name="status"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.status}
                  onChange={handleChange}
                >
                  <option value="Planifié">Planifié</option>
                  <option value="En cours">En cours</option>
                  <option value="Terminé">Terminé</option>
                  <option value="Archivé">Archivé</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre d'examens planifiés
                </label>
                <input
                  type="number"
                  name="exams"
                  min="0"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={form.exams}
                  onChange={handleChange}
                />
                <p className="text-gray-500 text-sm mt-2">
                  Nombre approximatif d'examens prévus pour ce semestre
                </p>
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
        data={semesters}
        columns={columns}
        title="Liste des Semestres"
        description={`${semesters.length} semestre(s) enregistré(s)`}
        searchable={true}
        filterable={true}
        pagination={true}
        itemsPerPageOptions={[5, 10, 25]}
        onRowClick={(semester) => {
          console.log("Semestre sélectionné:", semester);
          // Navigation vers les examens du semestre
        }}
        actions={actions}
        onAdd={openAdd}
        addButtonText="Nouveau semestre"
      />

      {/* Statistiques par année */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Répartition par statut</h3>
          <div className="space-y-3">
            {["En cours", "Planifié", "Terminé", "Archivé"].map(status => {
              const count = semesters.filter(s => s.status === status).length;
              const percentage = (count / semesters.length * 100).toFixed(1);
              
              let color;
              switch(status) {
                case "En cours": color = "bg-green-500"; break;
                case "Planifié": color = "bg-blue-500"; break;
                case "Terminé": color = "bg-gray-500"; break;
                case "Archivé": color = "bg-purple-500"; break;
              }
              
              return (
                <div key={status} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${color}`}></div>
                    <span>{status}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{count}</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${color}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-10">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Examens par année</h3>
          <div className="space-y-4">
            {years.map(year => {
              const yearSemesters = semesters.filter(s => s.year === year);
              const totalExams = yearSemesters.reduce((sum, s) => sum + s.exams, 0);
              const avgWeeks = yearSemesters.reduce((sum, s) => sum + s.weeks, 0) / yearSemesters.length;
              
              return (
                <div key={year} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{year}</div>
                    <div className="text-sm text-gray-500">
                      {yearSemesters.length} semestre(s)
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">{totalExams} examens</div>
                    <div className="text-sm text-gray-500">
                      {avgWeeks.toFixed(0)} semaines en moyenne
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cartes d'information */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-blue-500" />
            <div>
              <div className="text-2xl font-bold">{semesters.length}</div>
              <div className="text-gray-600 text-sm">Semestres total</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-500" />
            <div>
              <div className="text-2xl font-bold">
                {semesters.reduce((sum, s) => sum + s.exams, 0)}
              </div>
              <div className="text-gray-600 text-sm">Examens total</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3">
            <CalendarDays className="w-8 h-8 text-green-500" />
            <div>
              <div className="text-2xl font-bold">
                {Math.round(semesters.reduce((sum, s) => sum + s.weeks, 0) / semesters.length)}
              </div>
              <div className="text-gray-600 text-sm">Semaines moyenne</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
              <span className="text-yellow-600 font-bold">{years.length}</span>
            </div>
            <div>
              <div className="text-2xl font-bold">{years.length}</div>
              <div className="text-gray-600 text-sm">Années différentes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}