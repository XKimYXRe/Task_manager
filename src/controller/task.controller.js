import { TaskService } from "../services/task.service.js";

export class TaskController {
    taskService = new TaskService();

    create(title, description, userId) {
        if (!userId) throw new Error("Veuillez associé un utilisateur à la création de cette tâche.");
        if (!title) throw new Error("Veillez saisie un titre.");
        return this.taskService.create(title, description, userId);
    }

    findAll() {
        return this.taskService.findAll();
    }

    findOne(id) {
        if (!id) throw new Error("Identifiant incorrecte");
        return this.taskService.findOne(id);
    }

    delete(id) {
        if (!id) throw new Error("Identifiant incorrecte");
        return this.taskService.delete(id);
    }

    update(id, title, description) {
        if (!id) throw new Error("Identifiant incorrecte");
        return this.taskService.update(id, title, description);
    }
}
