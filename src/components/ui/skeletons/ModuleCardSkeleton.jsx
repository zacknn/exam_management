// src/components/ui/skeletons/ModuleCardSkeleton.jsx
export default function ModuleCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 animate-pulse">
      {/* Top row: icon + semestre badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gray-200 w-12 h-12 rounded-full" />
        <div className="bg-gray-200 h-7 w-16 rounded-full" />
      </div>

      {/* Code */}
      <div className="h-7 bg-gray-200 rounded w-28 mb-3" />

      {/* Libellé (2 lines) */}
      <div className="space-y-2">
        <div className="h-5 bg-gray-200 rounded w-full" />
        <div className="h-5 bg-gray-200 rounded w-4/5" />
      </div>

      {/* Bottom line: ID */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="h-4 bg-gray-200 rounded w-20" />
      </div>
    </div>
  );
}