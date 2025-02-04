
import { StorageRepository } from "./storage.repository.js";

export class TaskRepository {
    taskList = []
        storageInstance
        constructor() {
            this.storageInstance = new StorageRepository();
            this.storageInstance.createDatabase("taskManagerDataBase")
            this.storageInstance.createCollection("Task")
            this.taskList = this.storageInstance.read()
        }

        save(task) {
        task._id = this.taskList.length + 1
        this.taskList.push(task)
        this.storageInstance.write(this.taskList)
        return this.findOne(task._id)
    }

    findAll(){
        return this.storageInstance.read();
    }

    findOne(id) {
        return this.taskList.find(task => task._id == id)
    }

    delete(id) {
        const newTaskList = this.taskList.filter(task => task._id != id)
        const taskDeleted = this.findOne(id)
        this.taskList = newTaskList
        this.storageInstance.write(this.taskList)
        return taskDeleted
    }

    update(id, title, description) {
        this.taskList.forEach(task => {
            if(task._id == id) {
                task._title = title ? title : task._title
                task._description = description ? description : task._description
                task._update_at = new Date()
            }
            this.storageInstance.write(this.taskList);
        })
        return this.findOne(id)
    }   

}