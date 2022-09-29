import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import JwtService from './middlewares/JwtService';
import cors from 'cors';
import { sequelize } from './models';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();

sequelize.sync({alter: false, force: false})
    .then(()=>{
        console.log("✅ Connected to the database!");
    })
    .catch((error) =>{
        throw new Error(error);
    });

const tokenChecker = function (req: Request, res: Response, next: NextFunction){
    const userIdFromToken = JwtService.getUserIdFromRequest(req);
    req.body.userId = userIdFromToken;
    next();
}

app.use(cors());
app.use(tokenChecker);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

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

module.exports = app;