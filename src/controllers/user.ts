import express from "express";
import { AuthenticatedRequest } from "../middleware/authenticate"




export const getAuthenticatedUser = async (request: AuthenticatedRequest, response: express.Response, next: express.NextFunction) => {
    try {
        
        const user = request.user;

        const context = {user: user.returnUser}

        return response.status(201).json({ status: true, message: "get user successfully", data: context })

    }
    catch (error) {
        console.log(error)
        next(error)
    }
}
