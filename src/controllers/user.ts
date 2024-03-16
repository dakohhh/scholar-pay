import express from "express";

import { createUser, getUserByEmail } from "../db/users";

import { checkPassword, hashPassword } from "../authentication/hashing";

import { BadRequestException } from "../helpers/exceptions";

import { User } from "../types/user";

import config from "../config";

import { authenticateUser } from "../authentication/auth"

import {AuthenticatedRequest} from "../middleware/authenticate"




export const getAuthenticatedUser = async (request: AuthenticatedRequest, response: express.Response, next: express.NextFunction) => {
    try {


        const {password, ...user} = request.user.toObject()

        const context = {user: user}

        return response.status(201).json({ status: true, message: "get user successfully", data: context }).end()

    }
    catch (error) {
        console.log(error)
        next(error)
    }
}
