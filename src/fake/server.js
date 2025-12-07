import { createServer } from "miragejs";
import { users, groupes, modules, salles, sessions, examens, surveillances } from "./data";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      // USERS
      this.get("/users", () => users);
      this.post("/users", (_, request) => {
        const newUser = JSON.parse(request.requestBody);
        users.push(newUser);
        return newUser;
      });

      // GROUPES
      this.get("/groupes", () => groupes);

      // JOINED endpoint: groups with students
      this.get("/groupes-with-students", () => {
        return groupes.map(group => ({
          ...group,
          students: users.filter(u => u.role === "student" && u.groupe_id === group.id)
        }));
      });

      // MODULES
      this.get("/modules", () => modules);

      // SALLES
      this.get("/salles", () => salles);

      // EXAMENS
      this.get("/examens", () => examens);
      this.post("/examens", (_, request) => {
        const newExam = JSON.parse(request.requestBody);
        examens.push(newExam);
        return newExam;
      });

      // SURVEILLANCE
      this.get("/surveillances", () => surveillances);
    }
  });
}
