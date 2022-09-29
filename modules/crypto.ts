import crypto from 'crypto';
import dotenv from 'dotenv';
import { LogSet } from './common'
dotenv.config();
const INTERFACE_NAME = "CRTO";
const algorithm = 'aes-192-cbc';
const KEY = crypto.scryptSync(process.env.MYPASSWD!, 'salt', 24);



export function encrypt(text: string) {
    if (text.length < 16) {
        try{
            var cipher: any = crypto.createCipheriv(algorithm, KEY, Buffer.from(process.env.IV!));
            let encrypted: any = cipher.update(text, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            LogSet("i",INTERFACE_NAME,"ENCY","FS",2);
            return encrypted;
        }catch(e){
            LogSet("e",INTERFACE_NAME,"ENCY","FF",2);
            console.log(e);
        }
    }
    else {
        LogSet("e",INTERFACE_NAME,"ENCY","FF",1);
    }
}

export function decrypt(text: string) {
    try{
        let encryptedData: any = Buffer.from(text, "hex");
        var decipher: any = crypto.createDecipheriv(algorithm, KEY, process.env.IV!);
        let decrypted: any = decipher.update(encryptedData, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        LogSet("i",INTERFACE_NAME,"DECY","FS",1);
        return decrypted;
    }catch(e){
        LogSet("e",INTERFACE_NAME,"DECY","FF",1);
        console.log(e);
    }
}
