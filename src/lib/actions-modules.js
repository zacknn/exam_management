// src/lib/actions-modules.js

export async function fetchModules() {
  try {
    const response = await fetch("/api/modules");
    if (!response.ok) throw new Error("Failed to fetch modules");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching modules:", error);
    return [];
  }
}

export async function fetchModuleById(moduleId) {
  const modules = await fetchModules();
  const module = modules.find(m => m.id === parseInt(moduleId));
  return module || {
    id: moduleId,
    code: "Inconnu",
    libelle: "Module non trouvé",
    semestre: "-"
  };
}