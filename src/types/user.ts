import mongoose, { ObjectId } from "mongoose";


export interface User{
    firstname: string
    lastname :string
    email: string
    _id: mongoose.Types.ObjectId
}


