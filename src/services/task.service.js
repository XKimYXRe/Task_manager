import { UserRepository } from "../repositories/user.repository.js";
import { TaskRepository } from "../repositories/task.repository.js";
import { Task } from "../entities/task.js";

export class TaskService {

    taskRepository = new TaskRepository()
    userRepository = new UserRepository()

    create(title, description, userId) {
        const user = this.userRepository.findOne(userId)
        const task = new Task(undefined, title, description, false, new Date)
        task.addUser(user)
        this.taskRepository.save(task)
        
    }

    findAll(){
        return this.taskRepository.findAll()
    }

    findOne(id){
        return this.taskRepository.findOne(id)
    }

    delete(id) {
        this.taskRepository.delete(id)
    }

    update(id, title, description, status) {
        this.taskRepository.update(id, title, description, status);
    }
}