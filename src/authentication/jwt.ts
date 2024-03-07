import jwt from "jsonwebtoken"
import { TokenData } from "../types/jwt"




const createJWT = (data: TokenData): string => {

    jwt.sign(data, 'SECRET KEY', {
        expiresIn: '',
    });

    return ""
}