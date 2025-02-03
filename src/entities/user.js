import { Task } from "./task.js";

export class User {
    constructor(id, firstName, lastName, createAt = null, updateAt = null) {
        this._id = id
        this._firstName = firstName
        this._lastName = lastName
        this._createAt = createAt
        this._updateAt = updateAt
        this._taskList = [];
    }


    addTask(task) {
        const taskNewInstance = new Task (task._id, task._title, task._description, task._status, task._create_at, task._delete_at = null, task._update_at = null)
        delete taskNewInstance._userId
        this._taskList.push(taskNewInstance)
    }
}