import express from "express";

import { createUser, getUserByEmail } from "../db/users";

import { checkPassword, hashPassword } from "../authentication/hashing";

import { BadRequestException } from "../helpers/exceptions";

import { User } from "../types/user";

import config from "../config";

import { authenticateUser } from "../authentication/auth"

export const signup = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        const { email, password, firstname, lastname } = request.body;

        if (await getUserByEmail(email)) {

            throw new BadRequestException("email already exists");
        }

        const user: User = await createUser({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashPassword(password)

        })

        const context = { user: user }

        return response.status(201).json({ status: true, message: "user created successfully", data: context }).end()

    }
    catch (error) {
        console.log(error)
        next(error)
    }
}





export const login = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    try {

        const { email, password } = request.body;


        const user = await authenticateUser(email, password)

        console.log(user)


        const context = { token: "null" }

        return response.status(200).json({ status: true, message: "login successfull", data: context }).end()

    }
    catch (error) {
        console.log(error)
        next(error)
    }
}








