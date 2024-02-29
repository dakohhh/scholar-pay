import express from "express"
import { signup } from "../controllers/authentication"


export default (router:express.Router) => {
    router.post("/auth/signup", signup);
}