import {StorageRepository} from './storage.repository.js'


export class UserRepository {
    userList = []
    storageInstance
    constructor() {
        this.storageInstance = new StorageRepository();
        this.storageInstance.createDatabase("taskManagerDataBase")
        this.storageInstance.createCollection("User")
    }

    save(user) {
        user._id = this.userList.length + 1
        this.userList.push(user)
        this.storageInstance.write(this.userList)
    }

    findAll(){
        return this.storageInstance.read();
    }

    findOne(id) {
        return this.userList.find(user => user._id == id)
    }

    delete(id) {
        const newUserList = this.userList.filter(user => user._id != id)
        this.userList = newUserList
        this.storageInstance.write(this.userList)
    }

    update(id, firstName, lastName) {
        this.userList.forEach(user => {
            if(user._id == id) {
                user._firstName = firstName ? firstName : user._firstName
                user._lastName = lastName ? lastName : user._lastName
            }
            this.storageInstance.write(this.userList);
        })
    }
}