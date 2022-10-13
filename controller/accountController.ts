import { Request, Response, NextFunction } from "express";
import { Account } from "../models/Account";
import statusCode from "../modules/statusCode";
import message from "../modules/message";
import { encrypt, decrypt } from "../modules/crypto"
import responseMessage from "../modules/responseMessage";

export = {
    deposit:async (req: Request, res: Response, next: NextFunction) => {
        
    },
    withdraw:async (req: Request, res: Response, next: NextFunction) => {
        
    },
    autowithdraw:async (req: Request, res: Response, next: NextFunction) => {
        
    }

}