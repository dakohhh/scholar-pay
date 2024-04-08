import UserRoles from "enum/userRoles";
import mongoose, { Document } from "mongoose";
import { Instituition } from "./institution";



export interface User{
    _id: mongoose.Types.ObjectId
    firstname: string
    lastname :string
    email: string
    role: UserRoles
    institution: Instituition

}



export interface IUser extends Document{
    _id: mongoose.Types.ObjectId;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: UserRoles
    institution: Instituition
    fullname?:string
    returnUser?: User
}



export interface IVendor extends IUser{
    businessName: string
}