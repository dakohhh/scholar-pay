import express from "express";

import { createUser, getUsersByEmail } from "../db/users";

import { authentication, random } from "../helpers";

export const signup = async (request: express.Request, response: express.Response) => {


    try {

        const { email, password, username } = request.body;

        if (!email || !password || !username) {

            return response.status(400).json({ message: "field is required" })
        }

        if (await getUsersByEmail(email)) {

            return response.status(400).json({ message: "email already exists" })

        }





        const salt = random();

        const user = await createUser({
            email,
            username,
            authenrtication: {
                salt,
                password: authentication(salt, password),
            },
        })


        return response.status(200).json(user).end()

    }
    catch (error) {
        console.log(error)
        return response.sendStatus(400)
    }
}