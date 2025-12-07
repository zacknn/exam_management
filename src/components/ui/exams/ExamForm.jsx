// src/components/exams/ExamForm.jsx
import { useState } from "react";
import {
  modules,
  salles,
  users,
  groupes,
  examens,
  surveillances,
} from "../../../fake/data";
import { useExamAvailability } from "../../../hooks/useExamAvailability";
import AvailabilityBadge from "./AvailabilityBadge";
import ConflictAlert from "./ConflictAlert";

const teachers = users.filter((u) => u.role === "teacher");

export default function ExamForm() {
  const [form, setForm] = useState({
    module_id: "",
    type_examen: "Final",
    date: "",
    heure_debut: "",
    heure_fin: "",
    salle_id: "",
    enseignant_id: "",
    groupe_id: "",
  });

  const {
    isSalleAvailable,
    isTeacherAvailable,
    isGroupeAvailable,
    hasConflict,
  } = useExamAvailability({
    date: form.date,
    heure_debut: form.heure_debut,
    heure_fin: form.heure_fin,
  });

  const conflict = hasConflict(
    form.salle_id,
    form.enseignant_id,
    form.groupe_id
  );

  const handleSubmit = () => {
    if (conflict) return alert("Please resolve conflicts!");

    const newExam = {
      id: examens.length + 1,
      module_id: Number(form.module_id),
      name: modules.find((m) => m.id === Number(form.module_id))?.libelle,
      date_heure_debut: new Date(
        `${form.date}T${form.heure_debut}:00`
      ).toISOString(),
      date_heure_fin: new Date(
        `${form.date}T${form.heure_fin}:00`
      ).toISOString(),
      type_examen: form.type_examen,
      publie: false,
      responsable_id: 2,
    };

    examens.push(newExam);
    surveillances.push({
      examen_id: newExam.id,
      enseignant_id: Number(form.enseignant_id),
      salle_id: Number(form.salle_id),
      date_heure_debut: newExam.date_heure_debut,
      date_heure_fin: newExam.date_heure_fin,
    });

    alert("Exam created successfully!");
    console.log("New exam:", newExam);
  };

  return (
    <div className="space-y-6">
      <ConflictAlert show={conflict} />

      <div className="grid grid-cols-2 gap-6">
        {/* Module */}
        <div>
          <label className="block text-sm font-medium mb-2">Module</label>
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={form.module_id}
            onChange={(e) => setForm({ ...form, module_id: e.target.value })}
          >
            <option value="">Choose module</option>
            {modules.map((m) => (
              <option key={m.id} value={m.id}>
                {m.libelle}
              </option>
            ))}
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-2">Type</label>
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={form.type_examen}
            onChange={(e) => setForm({ ...form, type_examen: e.target.value })}
          >
            <option value="Final">Final</option>
            <option value="CC">CC</option>
            <option value="TP">TP</option>
          </select>
        </div>

        {/* Date & Time */}
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-2">Start</label>
            <input
              type="time"
              className="w-full border rounded-lg px-4 py-2"
              value={form.heure_debut}
              onChange={(e) =>
                setForm({ ...form, heure_debut: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">End</label>
            <input
              type="time"
              className="w-full border rounded-lg px-4 py-2"
              value={form.heure_fin}
              onChange={(e) => setForm({ ...form, heure_fin: e.target.value })}
            />
          </div>
        </div>

        {/* Salle */}
        <div>
          <label className="block text-sm font-medium mb-2">Room</label>
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={form.salle_id}
            onChange={(e) => setForm({ ...form, salle_id: e.target.value })}
          >
            <option value="">Choose room</option>
            {salles.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nom} ({s.capacite} seats)
                {form.date && form.heure_debut && (
                  <AvailabilityBadge available={isSalleAvailable(s.id)} />
                )}
              </option>
            ))}
          </select>
        </div>

        {/* Teacher */}
        <div>
          <label className="block text-sm font-medium mb-2">Supervisor</label>
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={form.enseignant_id}
            onChange={(e) =>
              setForm({ ...form, enseignant_id: e.target.value })
            }
          >
            <option value="">Choose teacher</option>
            {teachers.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nom}
                {form.date && form.heure_debut && (
                  <AvailabilityBadge available={isTeacherAvailable(t.id)} />
                )}
              </option>
            ))}
          </select>
        </div>

        {/* Group */}
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-2">Group</label>
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={form.groupe_id}
            onChange={(e) => setForm({ ...form, groupe_id: e.target.value })}
          >
            <option value="">Choose group</option>
            {groupes.map((g) => (
              <option key={g.id} value={g.id}>
                {g.libelle} ({g.niveau})
                {form.date && form.heure_debut && (
                  <AvailabilityBadge available={isGroupeAvailable(g.id)} />
                )}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={handleSubmit}
          disabled={
            conflict ||
            !form.module_id ||
            !form.date ||
            !form.heure_debut ||
            !form.salle_id
          }
          className={`flex-1 py-3 rounded-lg font-bold ${
            conflict
              ? "bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {conflict ? "Resolve Conflicts" : "Create Exam"}
        </button>
        <button className="px-8 py-3 border rounded-lg hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </div>
  );
}
