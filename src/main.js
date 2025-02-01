import { UserController } from "./controller/user.controller.js";

function main() {
  try {
    const userController = new UserController();
    userController.create("Kim", "Junior");
    userController.create("Serge", "Junior");
    userController.create("Richmond", "Xavier");

    userController.delete(2);
    userController.update(1, "Yacou", "Keïta");

    console.log(userController.findAll());
  } catch (error) {
    console.log(error.message)
  }
}

main()

// const math = new Task (1, "Exercice de math", "Faire un exercice de probabilité", false, new Date, undefined, undefined, 1)

// const physique = new Task (2, "Exercice de Physique", "Comprendre le système géocentrique", false, new Date, undefined, undefined, 1)

// user.addTask(math)
// user.addTask(physique)

// math.addUser(user)
// physique.addUser(user)
