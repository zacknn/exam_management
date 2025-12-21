// src/pages/AjouterUnGroupe.jsx
import { ArrowLeft, Plus, Edit2, Save, X, Users, Upload, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function AjouterUnGroupe() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header + Back Button */}
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/dashboard/Groups"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition font-medium"
          >
            <ArrowLeft size={20} />
            Retour à la liste des groupes
          </Link>

          <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
            <Users className="text-indigo-600" size={40} />
            Ajouter un groupe
          </h1>

          <div className="w-28" /> {/* Spacer */}
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Plus className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Création d'un nouveau groupe</h2>
                  <p className="text-indigo-100">Remplissez les informations ci-dessous</p>
                </div>
              </div>

              {/* Edit Button (UI only - shown as if editing) */}
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-3 rounded-lg transition backdrop-blur">
                <Edit2 size={18} />
                <span className="font-medium">Modifier</span>
              </button>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-8 space-y-7">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Libellé du groupe <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex: L3-GL-A"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Niveau <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex: L3, M1, M2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Remarque (facultatif)
              </label>
              <input
                type="text"
                placeholder="Ex: Groupe principal de TD, groupe de projet..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-gray-800 placeholder-gray-400"
              />
            </div>

            {/* Import Students Button */}
            <div className="pt-4">
              <button className="flex items-center gap-3 bg-green-50 hover:bg-green-100 text-green-700 font-medium px-6 py-4 rounded-lg border-2 border-dashed border-green-300 transition">
                <Upload size={22} />
                <div className="text-left">
                  <div className="font-semibold">Importer des étudiants depuis un fichier</div>
                  <div className="text-sm opacity-80">CSV, Excel ou texte (.txt, .csv, .xlsx)</div>
                </div>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-lg transition shadow-md">
                <Save size={18} />
                Enregistrer le groupe
              </button>

              <Link to="/dashboard/Groups">
                <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-8 py-3 rounded-lg transition">
                  <X size={18} />
                  Annuler
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-lg p-6 flex items-start gap-3">
          <FileText className="text-indigo-600 mt-1" size={20} />
          <p className="text-sm text-indigo-800">
            Après création, vous pourrez ajouter des étudiants manuellement ou importer une liste complète depuis un fichier Excel/CSV.
          </p>
        </div>
      </div>
    </div>
  );
}