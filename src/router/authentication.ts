import express from "express"
import { signup } from "../controllers/authentication"
import signupSchema from "../validation/signupSchema";
import { validateRequestBody } from "../middleware/validatiion";


export default (router:express.Router) => {
    router.post("/auth/signup", validateRequestBody(signupSchema), signup);
    
}