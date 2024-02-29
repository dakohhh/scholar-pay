import crypto from "crypto";



const SECRET = "a2fcd9e9f52b3807a1d7761be8a2b0f81bcf7fb4c320d799d97fa7a712b9c458"


export const random = (): string => crypto.randomBytes(128).toString("base64")


export const authentication = (salt:string, password:string) =>{

    return crypto.createHmac("sha256", [salt, password].join("/")).update(SECRET).digest("hex");
}


