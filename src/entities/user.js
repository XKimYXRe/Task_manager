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
        this._taskList.push(task)
    }
}

