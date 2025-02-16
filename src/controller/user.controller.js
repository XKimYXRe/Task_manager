import { UserService } from "../services/user.service.js";

export class UserController {
    userService = new UserService()

    async create(firstName, lastName) {
        if (!firstName) throw new Error("Veillez saisie le nom.")
        if (!lastName) throw new Error("Veillez saisie le prénom.");
        return await this.userService.create(firstName, lastName)
    }

    async findAll() {
        return await this.userService.findAll()
    }

    async findOne(id) {
        if (!id) throw new Error("Identifiant incorrecte");
        return await this.userService.findOne(id)
    }

    async delete(id) {
        if (!id) throw new Error("Identifiant incorrecte");
        return await this.userService.delete(id)
    }

    async update(id, firstName, lastName) {
        if (!id) throw new Error("Identifiant incorrecte");
       return await this.userService.update(id, firstName, lastName)
    }
}