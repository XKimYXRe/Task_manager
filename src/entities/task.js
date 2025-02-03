import {User} from "./user.js";
export class Task {
    constructor(id, title, description, status, create_at = null, delete_at = null, update_at = null) {
        this._id = id
        this._title = title
        this._description = description
        this._status = status
        this._create_at = create_at
        this._delete_at = delete_at
        this._update_at = update_at
        this._userId = [];
    }

    addUser(user) {
        if (user instanceof User) {
            this._userId.push(user._id)
        } else {
            console.error("Utilisateur invalide")
        }
        
    }
}
