// USERS (admin, planner, teachers, students)
export const users = [
  // Admin / Planner
  { id: 1, nom: "Admin Principal", email: "admin@univ.dz", password: "123456", role: "admin" },
  { id: 2, nom: "Planner Ali", email: "planner@univ.dz", password: "123456", role: "planner" },

  // Teachers
  { id: 3, nom: "Dr. Karim", email: "karim@univ.dz", password: "123456", role: "teacher" },
  { id: 4, nom: "Dr. Leila", email: "leila@univ.dz", password: "123456", role: "teacher" },
  { id: 5, nom: "Dr. Yacine", email: "yacine@univ.dz", password: "123456", role: "teacher" },

  // Students
  { id: 6, nom: "Sara", email: "sara@student.dz", password: "123456", role: "student", groupe_id: 1 },
  { id: 7, nom: "Mounir", email: "mounir@student.dz", password: "123456", role: "student", groupe_id: 1 },
  { id: 8, nom: "Rania", email: "rania@student.dz", password: "123456", role: "student", groupe_id: 2 },
  { id: 9, nom: "Omar", email: "omar@student.dz", password: "123456", role: "student", groupe_id: 2 },
  { id: 10, nom: "Lina", email: "lina@student.dz", password: "123456", role: "student", groupe_id: 2 },
  { id: 11, nom: "Youssef", email: "youssef@student.dz", password: "123456", role: "student", groupe_id: 3 },
  { id: 12, nom: "Nadia", email: "nadia@student.dz", password: "123456", role: "student", groupe_id: 3 }
];

// GROUPES
export const groupes = [
  { id: 1, libelle: "L3-GL-A", niveau: "L3" },
  { id: 2, libelle: "L3-GL-B", niveau: "L3" },
  { id: 3, libelle: "M1-GL-A", niveau: "M1" }
];

// MODULES
export const modules = [
  { id: 1, code: "GL101", libelle: "Génie Logiciel", semestre: 5 },
  { id: 2, code: "BD202", libelle: "Bases de Données Avancées", semestre: 5 },
  { id: 3, code: "SEC301", libelle: "Sécurité Informatique", semestre: 6 }
];

// SALLES
export const salles = [
  { id: 1, nom: "A12", capacite: 40, type: "normal" },
  { id: 2, nom: "B101", capacite: 25, type: "lab" },
  { id: 3, nom: "Amphi 3", capacite: 120, type: "amphi" }
];

// SESSION_EXAMEN
export const sessions = [
  {
    id: 1,
    libelle: "Session Janvier 2026",
    date_debut: "2026-01-10",
    date_fin: "2026-01-25"
  }
];

// EXAMENS
export const examens = [
  {
    id: 1,
    module_id: 1,
    name : "Génie Logiciel",
    date_heure_debut: "2026-01-12T08:00:00",
    date_heure_fin: "2026-01-12T10:00:00",
    type_examen: "Final",
    publie: false,
    responsable_id: 2
  },
  {
    id: 2,
    module_id: 2,
    name : "Bases de Données Avancées",
    date_heure_debut: "2026-01-14T14:00:00",
    date_heure_fin: "2026-01-14T16:00:00",
    type_examen: "CC",
    publie: true,
    responsable_id: 1
  }
];

// SURVEILLANCE
export const surveillances = [
  { examen_id: 1, enseignant_id: 3, salle_id: 1 , date_heure_debut: "2026-01-12T08:00:00", date_heure_fin: "2026-01-12T10:00:00" },
  { examen_id: 1, enseignant_id: 4, salle_id: 1 , date_heure_debut: "2026-02-12T08:00:00", date_heure_fin: "2026-02-12T10:00:00" },
  { examen_id: 2, enseignant_id: 5, salle_id: 3 , date_heure_debut: "2026-01-14T14:00:00", date_heure_fin: "2026-01-14T16:00:00" }
];
