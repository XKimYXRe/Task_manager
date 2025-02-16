import { UserRepository } from "../repositories/user.repository.js";
import { User } from "../entities/user.js";
export class UserService {

    userRepository = new UserRepository()

    create(firstName, lastName) {
        const user = new User(undefined, firstName, lastName, new Date)
        return this.userRepository.save(user)
    }

    async findAll() {
        return await this.userRepository.findAll()
    }

    async findOne(id) {
        return await this.userRepository.findOne(id)
    }

    async delete(id) {
      return  await this.userRepository.delete(id)
    }

    async update(id, firstName, lastName) {
       return await this.userRepository.update(id, firstName, lastName)
    }
}