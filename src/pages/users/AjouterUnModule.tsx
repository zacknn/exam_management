// src/pages/AjouterUnModule.jsx
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, Save, X, BookOpen, Edit2 } from "lucide-react";

export default function AjouterUnModule() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header + Back + Edit Button */}
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/dashboard/Modules"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition"
          >
            <ArrowLeft size={22} />
            Retour
          </Link>

          <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
            <BookOpen className="text-indigo-600" size={44} />
            Ajouter un module
          </h1>

          {/* Bouton Modifier (UI seulement, comme demandé) */}
          <button className="flex items-center gap-2 bg-white border border-indigo-300 text-indigo-700 hover:bg-indigo-50 font-medium px-5 py-3 rounded-lg transition shadow-sm">
            <Edit2 size={18} />
            Modifier
          </button>
        </div>

        {/* Card principale */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Plus className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Nouveau module</h2>
                <p className="text-indigo-100">Remplissez les informations ci-dessous</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: GL101"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom du module <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Génie Logiciel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Semestre <span className="text-red-500">*</span>
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition">
                <option value="">Choisir un semestre</option>
                {[1,2,3,4,5,6].map(s => (
                  <option key={s} value={s}>Semestre {s}</option>
                ))}
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Coefficient</label>
                <input type="number" placeholder="3" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Crédits</label>
                <input type="number" placeholder="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition shadow-md">
                <Save size={20} />
                Enregistrer
              </button>

              <Link to="/dashboard/Modules">
                <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-8 py-3.5 rounded-lg transition">
                  <X size={20} />
                  Annuler
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}