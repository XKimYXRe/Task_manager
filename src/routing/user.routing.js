import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

const router = Router()
const userController = new UserController()

router

    .post("/create", async (request, response) => {
        try {
            const { firstName, lastName } = request.body
            const user = await userController.create(firstName, lastName)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/all", async (request, response) => {
        try {
            const users = await userController.findAll()
            response.json(users)
        } catch (error) {
            response.json(error.message)
        }
    })

    .get("/:id", async (request, response) => {
        try {
            const user = await userController.findOne(request.params.id)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })

    .delete("/:id/delete", async (request, response) => {
        try {
            const user = await userController.delete(request.params.id)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })

    .put("/:id/update", async (request, response) => {
        try {
            const { firstName, lastName } = request.body
            const user = await userController.update(request.params.id,firstName,lastName)
            response.json(user)
        } catch (error) {
            response.json(error.message)
        }
    })


export default router 