import mongoose from "mongoose";




export interface Instituition extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
}
