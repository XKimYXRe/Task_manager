import express from "express";
import userRouter from "./routing/user.routing.js"
import taskRouter from "./routing/task.routing.js"

const application = express()
const port = 4000

application.use(express.json())
application.use(express.urlencoded({extended:true}))

application.use("/user", userRouter)
application.use("/task", taskRouter)

application.listen(port, (error) => {
    if (error) return console.log(`error: ${error}`)
    console.log(`task manager starting on ${port}`)
})