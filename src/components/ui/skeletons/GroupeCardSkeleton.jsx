// src/components/GroupeCardSkeleton.jsx
export default function GroupeCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-3">
          <div className="h-8 bg-gray-300 rounded w-40"></div>
          <div className="h-5 bg-gray-200 rounded w-28"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded-full w-24"></div>
      </div>
      <div className="mt-6 h-12 bg-gray-300 rounded-lg"></div>
    </div>
  );
}