// src/actions/actions-groupes.js
export async function fetchGroupesWithStudents() {
  try {
    const response = await fetch("/api/groupes-with-students");
    if (!response.ok) throw new Error("Failed to fetch groupes");
    const data = await response.json();
    console.log("Groupes with students:", data); // Debug
    return data;
  } catch (error) {
    console.error("Error fetching groupes:", error);
    return [];
  }
}

export async function fetchGroupeById(groupeId) {
  const groupes = await fetchGroupesWithStudents();
  const groupe = groupes.find(g => g.id === parseInt(groupeId));
  return groupe || { libelle: "Groupe non trouvé", students: [] };
}