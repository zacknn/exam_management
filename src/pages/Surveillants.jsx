import React, { useState } from "react";
import { UserCheck, Mail, Phone, Edit, Trash2, Plus } from "lucide-react";
import { DataTable } from "../components/DataTable";

export default function Surveillants() {
  const [showForm, setShowForm] = useState(false);
  const [surveillants, setSurveillants] = useState([
    {
      id: 1,
      nom: "Ahmed Ben Salem",
      email: "ahmed@univ.edu",
      telephone: "216 95 123 456",
      experience: "5 ans",
      statut: "Actif",
      departement: "Informatique",
      disponible: true
    },
    {
      id: 2,
      nom: "Fatima Kaddour",
      email: "fatima@univ.edu",
      telephone: "216 96 234 567",
      experience: "3 ans",
      statut: "Actif",
      departement: "Mathématiques",
      disponible: true
    },
    {
      id: 3,
      nom: "Mohamed Jbeli",
      email: "mohamed@univ.edu",
      telephone: "216 97 345 678",
      experience: "7 ans",
      statut: "En repos",
      departement: "Physique",
      disponible: false
    },
    {
      id: 4,
      nom: "Samira Ben Ali",
      email: "samira@univ.edu",
      telephone: "216 98 456 789",
      experience: "2 ans",
      statut: "Actif",
      departement: "Chimie",
      disponible: true
    },
    {
      id: 5,
      nom: "Karim Trabelsi",
      email: "karim@univ.edu",
      telephone: "216 99 567 890",
      experience: "10 ans",
      statut: "Actif",
      departement: "Biologie",
      disponible: false
    },
  ]);

  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    experience: "",
    departement: "",
    statut: "Actif",
    disponible: true
  });

  const columns = [
    { 
      key: "nom", 
      label: "Nom complet", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "email", 
      label: "Email", 
      sortable: true,
      render: (item) => (
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">{item.email}</span>
        </div>
      )
    },
    { 
      key: "telephone", 
      label: "Téléphone", 
      render: (item) => (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">{item.telephone}</span>
        </div>
      )
    },
    { 
      key: "departement", 
      label: "Département", 
      sortable: true,
      filterable: true 
    },
    { 
      key: "experience", 
      label: "Expérience", 
      sortable: true,
      render: (item) => (
        <span className="font-medium text-gray-700">{item.experience}</span>
      )
    },
    { 
      key: "disponible", 
      label: "Disponibilité", 
      sortable: true,
      filterable: true,
      render: (item) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          item.disponible 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {item.disponible ? "Disponible" : "Indisponible"}
        </span>
      )
    },
    { 
      key: "statut", 
      label: "Statut", 
      sortable: true,
      filterable: true,
      render: (item) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          item.statut === "Actif" 
            ? "bg-green-100 text-green-800" 
            : "bg-yellow-100 text-yellow-800"
        }`}>
          {item.statut}
        </span>
      )
    }
  ];

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce surveillant ?")) {
      setSurveillants(surveillants.filter(s => s.id !== id));
    }
  };

  const handleEdit = (surveillant) => {
    console.log("Éditer:", surveillant);
    // Ouvrir le formulaire avec les données existantes
    setForm({
      nom: surveillant.nom,
      email: surveillant.email,
      telephone: surveillant.telephone,
      experience: surveillant.experience,
      departement: surveillant.departement,
      statut: surveillant.statut,
      disponible: surveillant.disponible
    });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.email.trim()) {
      alert("Veuillez remplir les champs obligatoires (Nom et Email)");
      return;
    }

    const newSurveillant = {
      id: surveillants.length + 1,
      nom: form.nom,
      email: form.email,
      telephone: form.telephone,
      experience: form.experience || "0 an",
      departement: form.departement || "Non spécifié",
      statut: form.statut,
      disponible: form.disponible
    };

    setSurveillants([newSurveillant, ...surveillants]);
    
    // Réinitialiser le formulaire
    setForm({
      nom: "",
      email: "",
      telephone: "",
      experience: "",
      departement: "",
      statut: "Actif",
      disponible: true
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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
            <UserCheck className="w-8 h-8 text-blue-600" />
            Planification des Surveillants
          </h1>
          <p className="text-gray-600">Gérer les surveillants d'examen</p>
        </div>
      </div>

      {/* Formulaire modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-6">Ajouter un nouveau surveillant</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Ex: Ahmed Ben Salem"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ahmed@univ.edu"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="216 95 123 456"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Expérience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    placeholder="Ex: 5 ans"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Département
                  </label>
                  <select
                    name="departement"
                    value={form.departement}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="">Sélectionner un département</option>
                    <option value="Informatique">Informatique</option>
                    <option value="Mathématiques">Mathématiques</option>
                    <option value="Physique">Physique</option>
                    <option value="Chimie">Chimie</option>
                    <option value="Biologie">Biologie</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Statut
                  </label>
                  <select
                    name="statut"
                    value={form.statut}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="Actif">Actif</option>
                    <option value="En repos">En repos</option>
                    <option value="Congé">Congé</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="disponible"
                  name="disponible"
                  checked={form.disponible}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="disponible" className="text-gray-700">
                  Disponible pour surveillance
                </label>
              </div>

              <div className="flex gap-4 pt-4 border-t">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
                >
                  Ajouter le surveillant
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setForm({
                      nom: "",
                      email: "",
                      telephone: "",
                      experience: "",
                      departement: "",
                      statut: "Actif",
                      disponible: true
                    });
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition duration-300"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DataTable avec tous les filtres */}
      <DataTable
        data={surveillants}
        columns={columns}
        title="Liste des Surveillants"
        description={`${surveillants.length} surveillant(s) enregistré(s)`}
        searchable={true}
        filterable={true}
        pagination={true}
        itemsPerPageOptions={[5, 10, 25]}
        onRowClick={(surveillant) => {
          console.log("Surveillant sélectionné:", surveillant);
          // Afficher les détails ou ouvrir modal d'édition
        }}
        actions={actions}
        onAdd={() => setShowForm(true)}
        addButtonText="Ajouter un surveillant"
        showAddButton={true}
      />

      {/* Statistiques supplémentaires */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Disponibilité</h3>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-blue-600">
              {surveillants.filter(s => s.disponible).length}
            </span>
            <span className="text-gray-600">
              sur {surveillants.length} disponibles
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Statut</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-green-600">Actifs</span>
              <span className="font-medium">
                {surveillants.filter(s => s.statut === "Actif").length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-600">En repos</span>
              <span className="font-medium">
                {surveillants.filter(s => s.statut === "En repos").length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Expérience moyenne</h3>
          <div className="flex items-center">
            <span className="text-3xl font-bold text-green-600">
              {Math.round(
                surveillants.reduce((acc, s) => {
                  const years = parseInt(s.experience) || 0;
                  return acc + years;
                }, 0) / surveillants.length
              )}
            </span>
            <span className="ml-2 text-gray-600">ans</span>
          </div>
        </div>
      </div>
    </div>
  );
}