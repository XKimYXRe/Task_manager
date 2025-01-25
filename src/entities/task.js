import {User} from "./user.js";
export class Task {
    _id
    _title
    _description
    _status
    _create_at
    _delete_at
    _update_at
    _user = {}
    constructor(id, title, description, status, create_at, delete_at, update_at) {
        this._id = id
        this._title = title
        this._description = description
        this._status = status
        this._create_at = create_at
        this._delete_at = delete_at
        this._update_at = update_at
    }

    addUser(user) {
        const userNewInstance = new User(user._id, user._firstName, user._lastName, user._createAt)
        delete userNewInstance._taskList
        this._user = userNewInstance
    }
}
