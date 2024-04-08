import { Schema } from "mongoose";
import { BaseUserSchema } from "./users";
import { IVendor } from "../types/user";




export const VendorSchema: Schema<IVendor> = new Schema<IVendor>({
    ...BaseUserSchema.obj,
    businessName: { type: String }


})