import { Request, Response, NextFunction } from "express";
import { User } from "../Models/User";
import statusCode from "../modules/statusCode";
import message from "../modules/message";
import { Account } from "../Models/Account";
import { encrypt, decrypt } from "../modules/crypto";
import responseMessage from "../modules/responseMessage";

export = {
    signin: async (req: Request, res: Response, next: NextFunction) => {
        const {user_id, user_pw} = req.body;
        if(!user_id||!user_pw){
            return res
                .status(statusCode.BAD_REQUEST)
                .send(message.fail(statusCode.BAD_REQUEST,'로그인 실패하였습니다.'))
        }else{
            try{
                var encryptUserPw = await encrypt(user_pw);
                const user = await User.findOne({
                    where: {user_id: user_id, user_pw: encryptUserPw},
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
    },
    signup:async (req: Request, res: Response, next: NextFunction) => {
        const {user_id, user_pw, age, adress, name, sex} = req.body;
        if(!user_id||!user_pw||!age||!adress||!name||!sex){
            return res
                .status(statusCode.BAD_REQUEST)
                .send(message.fail(statusCode.BAD_REQUEST,'회원가입이 실패하였습니다.'));
        }else{
            try{
                const alreadyUser = await User.findOne({
                    where: {user_id},
                });
                if (alreadyUser){
                    return res
                        .status(statusCode.CONFLICT)
                        .send(message.fail(statusCode.CONFLICT,'이미 회원입니다.'));
                }else{
                    const encryptUserPw = await encrypt(user_pw);
                    const newUser = await User.create({
                        user_id: user_id, user_pw: encryptUserPw, age: age, adress: adress, name: name, sex: sex
                    });
                    await newUser.save();
                    const newUserInfo = await User.findOne({
                        where: {user_id},
                    })
                    return res
                        .status(statusCode.CREATED)
                        .send(message.success(statusCode.CREATED, '회원가입 되었습니다.', newUserInfo))
                }
            }catch(err){
                console.log(err);
            }
        }
    }
}