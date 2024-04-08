import { BadRequestException, CredentialException } from "../helpers/exceptions";
import { getUserByEmail } from "../repository/users";
import { checkPassword } from "./hashing";
import { createJWT, createTokenData } from "./jwt";


export const authenticateUser =  async (email:string, password:string): Promise<string> =>{

    const user =  await getUserByEmail(email);

    if(!user || !checkPassword(password, user.password)){
        throw new CredentialException("incorrect username or password");

    }

    const token = createJWT(createTokenData(user.id));
    
    return token;

}