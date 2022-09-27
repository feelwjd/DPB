import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import JwtService from './middlewares/JwtService';
dotenv.config();
const app = express();

const tokenChecker = function (req: Request, res: Response, next: NextFunction){
    const userIdFromToken = JwtService.getUserIdFromRequest(req);
    req.body.userId = userIdFromToken;
    next();
}

app.use(tokenChecker);

app.get('/',(req: Request, res: Response, next: NextFunction)=>{
    res.send('hello');
});

app.listen('8000',()=>{
    console.log(`
    ############################################
        🛡️  Server listening on port: 8000🛡️
    ############################################
    `);
});