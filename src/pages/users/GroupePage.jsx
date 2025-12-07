import { Suspense } from "react";
import GroupeCard from "../../components/ui/lists/GroupeCard";
import GroupeCardSkeleton from "../../components/ui/skeletons/GroupeCardSkeleton";
import { fetchGroupesResource } from "../../resources/groupeResource";

function GroupesList() {
  const groupes = fetchGroupesResource();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {groupes.map((groupe) => (
        <GroupeCard key={groupe.id} groupe={groupe} />
      ))}
    </div>
  );
}

export default function GroupesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Liste des Groupes
        </h1>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <GroupeCardSkeleton key={i} />
              ))}
            </div>
          }
        >
          <GroupesList />
        </Suspense>
      </div>
    </div>
  );
}