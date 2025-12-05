// ----- MODULES -----
export const MODULES = [
  { id: 1, code: "MAT101", libelle: "Mathématiques 1", semestre: 1 },
  { id: 2, code: "PROG102", libelle: "Programmation C", semestre: 1 },
  { id: 3, code: "WEB201", libelle: "Développement Web", semestre: 2 },
];

// ----- USERS -----
export const USERS = [
  { id: 1, nom: "Admin", email: "admin@uni.dz", password: "1234", role: "admin" },
  { id: 2, nom: "Planner", email: "plan@uni.dz", password: "1234", role: "planner" },
  { id: 3, nom: "Dr. Ahmed", email: "ahmed@uni.dz", password: "1234", role: "teacher" },
  { id: 4, nom: "Zack", email: "zack@uni.dz", password: "1234", role: "student" },
  {id : 5, nom: "Lina", email: "Lina@univ.dz", password: "1234", role: "student"},
];

// ----- GROUPES -----
export const GROUPES = [
  { id: 1, libelle: "M1GL-A", niveau: "M1" },
  { id: 2, libelle: "L2INFO-B", niveau: "L2" },
];

// ----- SALLES -----
export const SALLES = [
  { id: 1, nom: "Amphi 1", capacite: 150, type: "amphi" },
  { id: 2, nom: "Salle 12", capacite: 30, type: "normal" },
  { id: 3, nom: "Lab Info", capacite: 25, type: "lab" },
];

// ----- SESSION EXAMEN -----
export const SESSIONS = [
  {
    id: 1,
    libelle: "Session Janvier 2026",
    date_debut: "2026-01-10",
    date_fin: "2026-01-25",
  },
];

// ----- EXAMENS -----
export const EXAMENS = [
  {
    id: 1,
    date_heure_debut: "2026-01-12T09:00",
    date_heure_fin: "2026-01-12T11:00",
    type_examen: "Final",
    publie: false,
    responsable_id: 3, // Dr. Ahmed
  },
  {
    id: 2,
    date_heure_debut: "2026-01-15T14:00",
    date_heure_fin: "2026-01-15T16:00",
    type_examen: "CC",
    publie: false,
    responsable_id: 3,
  },
];

// ----- SURVEILLANCES -----
export const SURVEILLANCES = [
  { examen_id: 1, enseignant_id: 3, salle_id: 1 },
  { examen_id: 2, enseignant_id: 3, salle_id: 2 },
];

// ----- HISTORIQUE -----
export const HISTORIQUE = [
  {
    id: 1,
    examen_id: 1,
    champ: "date_heure_debut",
    ancienne_valeur: "2026-01-12T10:00",
    nouvelle_valeur: "2026-01-12T09:00",
    date_modif: "2025-12-01T12:00",
    modifie_par: 2,
  },
];

export const stats = [
    { title: "Total Student", value: 1234 },
    { title: "Salles Disponibles", value: 15 },
    { title: "Modules", value: 17 },
    { title: "Total Teachers", value: 100 },
    { title: "Groups", value: 14 },
    { title: "Exams Planned", value: 32 },
  ];