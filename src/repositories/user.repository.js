
import mongoRepository from './mongodb.repository.js'


export class UserRepository {
    storageInstance
    constructor() {
        mongoRepository.connect()
        mongoRepository.createDatabase("taskManagerDataBase")
        mongoRepository.createCollection("User")
        
    }

    save(user) {
        return mongoRepository.insertOne(user)
    }

    findAll(){
        return mongoRepository.find();
    }

    findOne(id) {
        return mongoRepository.findOne(id)
    }

    delete(id) {
        return mongoRepository.delete(id)
    }

    update(id, firstName, lastName) {
        return mongoRepository.update(id, { _firstname: firstName, _lastName: lastName});
    }
}