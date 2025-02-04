import { Router } from "express";
import { TaskController } from "../controller/task.controller.js";

const router = Router()
const taskController = new TaskController()

router

    .post("/create", (request, response) => {
        try {
            const { title, description,userId } = request.body
            const task = taskController.create(title, description,userId)
            response.json(task)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/all", (request, response) => {
        try {
            const tasks = taskController.findAll()
            response.json(tasks)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/:id", (request, response) => {
        try {
            const task = taskController.findOne(request.params.id)
            response.json(task)
        } catch (error) {
            response.json(error.message)
        }
    })

    .delete("/:id/delete", (request, response) => {
        try {
            const task = taskController.delete(request.params.id)
            response.json(task)
        } catch (error) {
            response.json(error.message)
        }
    })

    .put("/:id/update", (request, response) => {
        try {
            const { title, description } = request.body
            const task = taskController.update(request.params.id,title,description)
            response.json(task)
        } catch (error) {
            response.json(error.message)
        }
    })


export default router 