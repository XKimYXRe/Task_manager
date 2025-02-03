import { Task } from "./task.js";

export class User {
    _id 
    _firstName
    _lastName
    _createAt
    _updateAt
    _taskList = []
    constructor(id, firstName, lastName, createAt, updateAt) {
        this._id = id
        this._firstName = firstName
        this._lastName = lastName
        this._createAt = createAt
        this._updateAt = updateAt
    }

    addTask(task) {
        const taskNewInstance = new Task(task._id, task._title, task._description, task._status, task._create_at, task._delete_at, task._update_at)
        delete taskNewInstance._user
        this._taskList.push(taskNewInstance)
    }
}

