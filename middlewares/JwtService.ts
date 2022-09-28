import { Request } from "express";
import jwt from 'jsonwebtoken';
import {User} from '../Models/User';

export default class JwtService {
    static getUserIdFromRequest = (req: Request): string | null => {
        const token = this.extractTokenFromRequest(req);
        if (!token){
            return null;
        }else{
            const jwtPayload = this.decodeJWT(token);
            return (jwtPayload as any)?._id || null;
        }
    }

    static extractTokenFromRequest = (req: Request): string | undefined => {
        const TOKEN_PREFIX = process.env.TOKEN_PREFIX!;
        const auth = req.headers.authorization;
        const token = auth?.includes(TOKEN_PREFIX)
            ? auth.split(TOKEN_PREFIX)[1]
            : auth
        return token;
    }

    static decodeJWT = (token: string) => {
        try{
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY!)
            return decodedToken;
        }catch{
            return null;
        }
    }

    static createJWT =async (user:User): Promise<string> => {
        const token = jwt.sign(
            {_id: user.id},
            process.env.JWT_SECRET_KEY!,
        );
        return token;
    }
}