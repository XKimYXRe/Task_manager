import { UserRepository } from "../repositories/user.repository.js";
import { User } from "../entities/user.js";
export class UserService {

    userRepository = new UserRepository() 

    create(firstName, lastName) {
        const user = new User(undefined, firstName, lastName, new Date)
        this.userRepository.save(user)
        
    }

    findAll(){
        return this.userRepository.findAll()
    }

    findOne(id){
        return this.userRepository.findOne(id)
    }

    delete(id) {
        this.userRepository.delete(id)
    }

    update(id, firstName, lastName) {
        this.userRepository.update(id, firstName, lastName)
    }
}