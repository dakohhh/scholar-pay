import jwt, { JwtPayload } from "jsonwebtoken"
import { TokenData } from "../types/jwt"
import config from "../config";



export const createJWT = (data: JwtPayload): string => {
    const token = jwt.sign(data, config.secret_key);

    return token;
};



export const verifyJWT = (token: string): JwtPayload | null => {
    try {
        const decoded = jwt.verify(token, config.secret_key) as JwtPayload;
        return decoded;
    } catch (error) {
        return null; // If verification fails, return null
    }
};



export const createTokenData = (userId: string): JwtPayload => {
    const tokenData: JwtPayload = {
        userId: userId,
        iat: Math.floor(Date.now() / 1000), // Add 'iat' (issued at)
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // Add 'exp' (expiration time)
    };

    return tokenData
}