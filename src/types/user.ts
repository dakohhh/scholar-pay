import mongoose, { ObjectId, Document } from "mongoose";

export interface User{
    firstname: string
    lastname :string
    email: string
    _id: mongoose.Types.ObjectId
}


export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}