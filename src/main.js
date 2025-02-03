import {User} from "./entities/user.js";
import {Task} from "./entities/task.js";

const user = new User(1, "Junior", "Kim", new Date)

const math = new Task (1, "Exercice de math", "Faire un exercice de probabilité", false, new Date, undefined, undefined, 1)

const physique = new Task (2, "Exercice de Physique", "Comprendre le système géocentrique", false, new Date, undefined, undefined, 1)

user.addTask(math)
user.addTask(physique)

math.addUser(user)
physique.addUser(user)

console.log(user)
console.log(math)
console.log(physique)

// console.log(math)

// console.log(math._user._taskList[0])