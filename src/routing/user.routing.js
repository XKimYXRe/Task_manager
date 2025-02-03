import { Router } from "express";

const router = Router()

router.get("create", (request, response) => {
    response.send("Hello")
})


export default router 