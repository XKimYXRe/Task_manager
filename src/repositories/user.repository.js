
import mongoRepository from './mongodb.repository.js'


export class UserRepository {

    constructor() {
        this.init()
    }

    init() {
        Promise.all([
            mongoRepository.createDatabase("taskManagerDataBase"),
            mongoRepository.createCollection("User")
        ])
    }

    async save(user) {
        return await mongoRepository.insertOne(user)
    }

    async findAll() {
        return await mongoRepository.find();
    }

    async findOne(id) {
        return await mongoRepository.findOne(id)
    }

    async delete(id) {
        return await mongoRepository.delete(id)
    }

    async update(id, firstName, lastName) {
        const updateInfo = {
            ...(firstName && { _firstName: firstName }),
            ...(lastName && { _lastName: lastName })
        }
        const isValide = Object.keys(updateInfo).length === 0
        if (isValide) {
            throw new Error("Aucune information valide à mettre à jour");
        }
        return await mongoRepository.update(id, updateInfo);
    }
}