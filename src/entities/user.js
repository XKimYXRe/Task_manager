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
        this._taskList.push(task)
    }
}

