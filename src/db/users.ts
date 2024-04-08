import mongoose, { Schema } from "mongoose";
import { User, IUser } from "../types/user";
import UserRoles from "../enum/userRoles";
import { InstituitionModel } from "./institution";




export const BaseUserSchema: Schema = new mongoose.Schema({

    firstname: { type: String, required: true },

    lastname: { type: String, required: true },

    email: { type: String, required: true },

    password: { type: String, required: true },

    institution: {type: Schema.Types.ObjectId, required: true, ref: InstituitionModel},

    role: { type: Number, required: true, enum: Object.values(UserRoles) } 

},
    { timestamps: true })








export const UserSchema: Schema<IUser> = new mongoose.Schema<IUser>({

    ...BaseUserSchema.obj
})


UserSchema.virtual('returnUser').get(function () {
    return <User>{
        _id: this._id,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
    }
});



export const UserModel = mongoose.model<IUser>('User', UserSchema);

