import mongoose, { Schema } from "mongoose"
import { Instituition } from "../types/institution"




export const InstituitionSchema: Schema<Instituition> = new mongoose.Schema<Instituition>({

    name: { type: String, required: true }
},
    { timestamps: true })




export const InstituitionModel = mongoose.model<Instituition>('Instituition', InstituitionSchema);
