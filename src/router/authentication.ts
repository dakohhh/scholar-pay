import express from "express"
import { signup, login } from "../controllers/authentication"
import signupSchema from "../validation/signupSchema";
import loginSchema from "../validation/loginSchema";
import { validateRequestBody } from "../middleware/validatiion";


export default (router:express.Router) => {
    router.post("/auth/signup", validateRequestBody(signupSchema), signup);
    router.post("/auth/login", validateRequestBody(loginSchema), login)
    
}