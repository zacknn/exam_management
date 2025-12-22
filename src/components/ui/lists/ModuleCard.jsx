// src/components/ui/lists/ModuleCard.jsx
import { BookOpen } from "lucide-react";

export default function ModuleCard({ module }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 transition-transform hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-indigo-100 p-3 rounded-full">
          <BookOpen className="w-6 h-6 text-indigo-600" />
        </div>
        <span className="text-xs font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
          S{module.semestre}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {module.code}
      </h3>

      <p className="text-gray-700 font-medium leading-snug">
        {module.libelle}
      </p>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">ID: {module.id}</span>
      </div>
    </div>
  );
}