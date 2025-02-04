import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

const router = Router()
const userController = new UserController()

router

    .post("/create", (request, response) => {
        try {
            const { firstName, lastName } = request.body
            const user = userController.create(firstName, lastName)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/all", (request, response) => {
        try {
            const users = userController.findAll()
            response.json(users)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/:id", (request, response) => {
        try {
            const user = userController.findOne(request.params.id)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })

    .delete("/:id/delete", (request, response) => {
        try {
            const user = userController.delete(request.params.id)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })

    .put("/:id/update", (request, response) => {
        try {
            const { firstName, lastName } = request.body
            const user = userController.update(request.params.id,firstName,lastName)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })


export default router 