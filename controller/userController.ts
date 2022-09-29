import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import statusCode from "../modules/statusCode";
import message from "../modules/message";
import { Account } from "../models/Account";
import responseMessage from "../modules/responseMessage";

export = {
    login: async (req: Request, res: Response, next: NextFunction) => {
        const {user_id, user_pw} = req.body;
        if(!user_id||!user_pw){
            return res
                .status(statusCode.BAD_REQUEST)
                .send(message.fail(statusCode.BAD_REQUEST,'로그인 실패하였습니다.'))
        }else{
            try{
                const user = await User.findOne({
                    where: {user_id, user_pw},
                    attributes: [
                        "user_id",
                        "name",
                        "age",
                        "adress",
                        "sex",
                    ],
                    include: [
                        {model: Account, attributes: { exclude: ["createdAt","updatedAt"]}},
                    ],
                });
                if(!user){
                    return res
                        .status(statusCode.NOT_FOUND)
                        .send(message.fail(statusCode.NOT_FOUND, '아이디가 존재하지 않습니다.'));
                }else{
                    return res
                        .status(statusCode.OK)
                        .send(message.success(statusCode.OK,'로그인 성공하였습니다.',user));
                }
            }catch(err){
                console.log(err);
            }
        }
    }
}