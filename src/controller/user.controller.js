import { UserService } from "../services/user.service.js";

export class UserController {
    userService = new UserService()

    create(firstName, lastName) {
        if (!firstName) throw new Error("Veillez saisie le nom.")
        if (!lastName) throw new Error("Veillez saisie le prénom.");
        return this.userService.create(firstName, lastName)
    }

    findAll() {
        return this.userService.findAll()
    }

    findOne(id) {
        if (!id) throw new Error("Identifiant incorrecte");
        return this.userService.findOne(id)
    }

    delete(id) {
        if (!id) throw new Error("Identifiant incorrecte");
        return this.userService.delete(id)
    }

    update(id, firstName, lastName) {
        if (!id) throw new Error("Identifiant incorrecte");
       return this.userService.update(id, firstName, lastName)
    }
}