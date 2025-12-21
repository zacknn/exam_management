// src/pages/ModulesPage.jsx
import { Suspense } from "react";
import { Link } from "react-router-dom";
import ModuleCard from "../components/ui/lists/ModuleCard";
import ModuleCardSkeleton from "../components/ui/skeletons/ModuleCardSkeleton";
import { fetchModulesResource } from "../resources/moduleResource";
import { BookOpen, Plus } from "lucide-react";

function ModulesList() {
  const modules = fetchModulesResource();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
}

export default function ModulesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <BookOpen className="text-indigo-600" size={44} />
            Liste des Modules
          </h1>
          <p className="text-gray-600 text-lg">Tous les modules de l'établissement</p>
        </div>

        {/* Add Button */}
        <div className="text-center mb-12">
          <Link to="/dashboard/AjouterUnModule">
            <button className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg">
              <Plus size={22} />
              Ajouter un module
            </button>
          </Link>
        </div>

        {/* List with Suspense */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <ModuleCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <ModulesList />
        </Suspense>
      </div>
    </div>
  );
}