import { Request } from "express";
import jwt from 'jsonwebtoken';
import {User} from '../models/User';
import { secretKey } from '../config/secretKey';

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

export = {
    sign: async (user: User) => {
      const payload = {
        id: user.id,
        username: user.name,
      };
      const result = {
        accessToken: jwt.sign(payload, secretKey.secretKey, secretKey.option),
        // refreshToken: jwt.sign(payload, secretKey, refreshOptions),
      };
      return result;
    },
    verify: async (token: any) => {
      let decoded;
      try {
        decoded = jwt.verify(token, secretKey.secretKey);
      } catch (err) {
        if (err === "jwt expired") {
          console.log("expired token");
          return TOKEN_EXPIRED;
        } else if (err === "invalid token") {
          console.log("invalid token");
          console.log(TOKEN_INVALID);
          return TOKEN_INVALID;
        } else {
          console.log("invalid token");
          return TOKEN_INVALID;
        }
      }
      return decoded;
    },
  };