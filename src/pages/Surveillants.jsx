import React, { useState } from "react";
import { UserCheck, Plus, Mail, Phone, Edit, Trash2 } from "lucide-react";

/**
 * SurveillantsPage
 * - liste des surveillants
 * - bouton "Ajouter un surveillant" (affiche le formulaire inline)
 * - formulaire inline (même page) avec style identique à ta capture
 */
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
    },
    {
      id: 2,
      nom: "Fatima Kaddour",
      email: "fatima@univ.edu",
      telephone: "216 96 234 567",
      experience: "3 ans",
      statut: "Actif",
    },
    {
      id: 3,
      nom: "Mohamed Jbeli",
      email: "mohamed@univ.edu",
      telephone: "216 97 345 678",
      experience: "7 ans",
      statut: "En repos",
    },
  ]);

  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    experience: "",
    statut: "Actif",
  });

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom.trim()) return;
    const newItem = {
      id: Date.now(),
      nom: form.nom,
      email: form.email,
      telephone: form.telephone,
      experience: form.experience || "0 ans",
      statut: form.statut || "Actif",
    };
    setSurveillants((s) => [newItem, ...s]);
    setForm({ nom: "", email: "", telephone: "", experience: "", statut: "Actif" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setSurveillants((s) => s.filter((x) => x.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#ebedf3] text-black p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <UserCheck className="w-10 h-10 text-green-400" />
            Planification des Surveillants
          </h1>
          <p className="text-black mt-1">Gérer les surveillants d'examen</p>
        </div>

        <div>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
          >
            <Plus className="w-4 h-4" />
            Ajouter un surveillant
          </button>
        </div>
      </div>

      {/* Inline Form (show on toggle) */}
      {showForm && (
        <div className="mb-8">
          <div className="bg-[#ebedf3] border border-[#1f2937] rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">Ajouter un nouveau surveillant</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-300 block mb-1">Nom complet</label>
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Ex: Ahmed Ben Salem"
                  className="w-full p-3 rounded-lg bg-[#ebedf3] border border-[#26303a] text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-1">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ahmed@univ.edu"
                  className="w-full p-3 rounded-lg bg-[#ebedf3] border border-[#26303a] text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-1">Téléphone</label>
                <input
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="216 95 123 456"
                  className="w-full p-3 rounded-lg bg-[#ebedf3] border border-[#26303a] text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 block mb-1">Expérience</label>
                <input
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="Ex: 5 ans"
                  className="w-full p-3 rounded-lg bg-[#ebedf3] border border-[#26303a] text-white placeholder-gray-500"
                />
              </div>

              {/* Buttons */}
              <div className="md:col-span-2 flex gap-4 mt-2">
                <button type="submit" className="px-6 py-2 bg-green-600 rounded-lg">
                  Créer
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setForm({ nom: "", email: "", telephone: "", experience: "", statut: "Actif" });
                  }}
                  className="px-6 py-2 bg-transparent border border-gray-600 rounded-lg"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* List card */}
      <div className="bg-[#ebedf3] border border-[#1f2937] rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-6 text-black">Liste des Surveillants</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-black border-b border-[#1f2937]">
                <th className="pb-3 pr-6">Nom</th>
                <th className="pb-3 pr-6">Email</th>
                <th className="pb-3 pr-6">Téléphone</th>
                <th className="pb-3 pr-6">Expérience</th>
                <th className="pb-3 pr-6">Statut</th>
                <th className="pb-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {surveillants.map((s) => (
                <tr key={s.id} className="border-b border-[#1f2937] hover:bg-[#071123]">
                  <td className="py-4 font-medium text-black">{s.nom}</td>

                  <td className="py-4 text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-black" />
                    <span>{s.email}</span>
                  </td>

                  <td className="py-4 text-gray-300 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-black" />
                    <span>{s.telephone}</span>
                  </td>

                  <td className="py-4 text-black">{s.experience}</td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        s.statut === "Actif" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"
                      }`}
                    >
                      {s.statut}
                    </span>
                  </td>

                  <td className="py-4 text-center">
                    <div className="flex items-center justify-center gap-4">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {surveillants.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-gray-400">
                    Aucun surveillant trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
