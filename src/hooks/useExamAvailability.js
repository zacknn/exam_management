// src/hooks/useExamAvailability.js
import { examens, surveillances } from "../fake/data";

export function useExamAvailability({ date, heure_debut, heure_fin }) {
  const newStart = date && heure_debut ? new Date(`${date}T${heure_debut}:00`) : null;
  const newEnd = date && heure_fin ? new Date(`${date}T${heure_fin}:00`) : null;

  const hasTime = newStart && newEnd;

  const isSalleAvailable = (salleId) => {
    if (!hasTime) return true;
    return !surveillances.some(s => {
      if (s.salle_id !== salleId) return false;
      const exam = examens.find(e => e.id === s.examen_id);
      if (!exam) return false;
      const start = new Date(exam.date_heure_debut);
      const end = new Date(exam.date_heure_fin);
      return newStart < end && newEnd > start;
    });
  };

  const isTeacherAvailable = (teacherId) => {
    if (!hasTime) return true;
    return !surveillances.some(s => {
      if (s.enseignant_id !== teacherId) return false;
      const exam = examens.find(e => e.id === s.examen_id);
      if (!exam) return false;
      const start = new Date(exam.date_heure_debut);
      const end = new Date(exam.date_heure_fin);
      return newStart < end && newEnd > start;
    });
  };

  const isGroupeAvailable = (groupeId) => {
    if (!hasTime) return true;
    return !examens.some(e => {
      const start = new Date(e.date_heure_debut);
      const end = new Date(e.date_heure_fin);
      return newStart < end && newEnd > start;
    });
  };

  const hasConflict = (salleId, teacherId, groupeId) =>
    (salleId && !isSalleAvailable(salleId)) ||
    (teacherId && !isTeacherAvailable(teacherId)) ||
    (groupeId && !isGroupeAvailable(groupeId));

  return {
    isSalleAvailable,
    isTeacherAvailable,
    isGroupeAvailable,
    hasConflict,
  };
}