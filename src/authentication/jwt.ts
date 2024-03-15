import jwt from "jsonwebtoken"
import { TokenData } from "../types/jwt"
import config from "../config";



export const createJWT = (data: TokenData): string => {
    const token = jwt.sign(data, config.secret_key);

    return token;
};



export const createTokenData = (userId: string): TokenData => {
    const tokenData: TokenData = {
        userId: userId,
        iat: Math.floor(Date.now() / 1000), // Add 'iat' (issued at)
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // Add 'exp' (expiration time)
    };

    return tokenData
}