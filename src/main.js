import { application } from "express";
import userRouter from "./routing/user.routing.js"

const port = 4000
// application.use("user", userRouter)
application.get("/create", (request, response) => {
    response.send("Hello")
})
application.listen(port, () => {
console.log(`task manager starting on ${port}`)
})