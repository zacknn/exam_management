/**
 * @typedef {Object} Module
 * @property {number} id
 * @property {string} code
 * @property {string} libelle
 * @property {number} semestre
 */

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} nom
 * @property {string} email
 * @property {string} password
 * @property {"admin" | "planner" | "teacher" | "student"} role
 */

/**
 * @typedef {Object} Groupe
 * @property {number} id
 * @property {string} libelle
 * @property {string} niveau
 */

/**
 * @typedef {Object} Salle
 * @property {number} id
 * @property {string} nom
 * @property {number} capacite
 * @property {"normal" | "amphi" | "lab"} type
 */

/**
 * @typedef {Object} SessionExamen
 * @property {number} id
 * @property {string} libelle
 * @property {string} date_debut
 * @property {string} date_fin
 */

/**
 * @typedef {Object} Examen
 * @property {number} id
 * @property {string} date_heure_debut
 * @property {string} date_heure_fin
 * @property {"CC" | "Final" | "Rattrapage" | "TP" | "Remplacement"} type_examen
 * @property {boolean} publie
 * @property {number} responsable_id
 */

/**
 * @typedef {Object} Surveillance
 * @property {number} examen_id
 * @property {number} enseignant_id
 * @property {number|null} salle_id
 */

/**
 * @typedef {Object} HistoriqueModif
 * @property {number} id
 * @property {number} examen_id
 * @property {string} champ
 * @property {string} ancienne_valeur
 * @property {string} nouvelle_valeur
 * @property {string} date_modif
 * @property {number} modifie_par
 */

export {};
