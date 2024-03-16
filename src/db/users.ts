import mongoose from "mongoose";
import { IUser } from "../types/user";

const UserSchema = new mongoose.Schema({

    firstname: {type: String, required:true},

    lastname: {type: String, required:true},

    email: { type: String, required: true },

    password: {type: String, required:true}

})



export const UserModel = mongoose.model<IUser>('User', UserSchema);



export const getUsers = () => UserModel.find() // returns all users in the User schema

export const getUserByEmail = (email: string) => UserModel.findOne({ email });


export const getUserById = (userId: string) => UserModel.findById(userId);


export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save().then((user) => {
        const {password, ...userObject} = user.toObject()
        return userObject;
    })


export const deleteUserById = (userId: string) => UserModel.findOneAndDelete({ _id: userId });


export const updateUserById = (userId: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(userId, values);

