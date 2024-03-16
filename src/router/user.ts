import express from "express"
import { getAuthenticatedUser } from "../controllers/user"
import authenticate from "../middleware/authenticate";


export default (router:express.Router) => {
    router.get("/user", authenticate,  getAuthenticatedUser);
    
}