export default function CreateSalle({ onCancel }) {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Ajouter une nouvelle salle</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">Nom de la salle</label>
          <input
            className="p-3 border rounded-md border-gray-300"
            placeholder="Ex: Salle 101"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">Capacité</label>
          <input
            className="p-3 border rounded-md border-gray-300"
            placeholder="50"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">Bâtiment</label>
          <input
            className="p-3 border rounded-md border-gray-300"
            placeholder="Bâtiment A"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">Étage</label>
          <input
            className="p-3 border rounded-md border-gray-300"
            placeholder="1"
          />
        </div>

      </div>

      <div className="flex gap-4 mt-6">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">Créer</button>
        <button onClick={onCancel} className="px-6 py-2 bg-gray-300 rounded-md">
          Annuler
        </button>
      </div>
    </div>
  );
}
