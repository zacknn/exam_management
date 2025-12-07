import { Suspense } from "react";
import TeacherCard from "../../components/ui/lists/TeacherCard";
import TeacherCardSkeleton from "../../components/ui/skeletons/TeacherCardSkeleton";
import { fetchTeachersResource } from "../../resources/teachersResources";

function TeachersList() {
  const teachers = fetchTeachersResource(); // This will throw promise → caught by Suspense

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
}

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Liste des Enseignants
        </h1>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <TeacherCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <TeachersList />
        </Suspense>
      </div>
    </div>
  );
}