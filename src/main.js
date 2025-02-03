import {User} from "./entities/user.js";
import {Task} from "./entities/task.js";

const user1 = new User(1, "Junior", "Kim", new Date())
const user2 = new User(2, "Dexma", "Reborn", new Date());

const math = new Task (1, "Exercice de math", "Faire un exercice de probabilité", false, new Date(), undefined, undefined)

const physique = new Task (2, "Exercice de Physique", "Comprendre le système géocentrique", false, new Date(), undefined, undefined)

user1.addTask(math)
user2.addTask(physique)
math.addUser(user1)
physique.addUser(user2)

console.log(user1)
console.log(user2);
console.log(math)
console.log(physique)

// console.log(math)

// console.log(math._user._taskList[0])