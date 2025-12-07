export default function TeacherCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-300 rounded-full w-16 h-16"></div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 rounded w-40"></div>
          <div className="h-4 bg-gray-200 rounded w-56"></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-7 bg-gray-200 rounded-full w-24"></div>
      </div>
    </div>
  );
}