import { logger } from "../config/winston";

/**
 * 
 * @param {String} val i : info / e : error
 * @param {String} IFcode    Interface Code (4)
 * @param {String} funcName     Function Name (4)
 * @param {String} code         Code (2)
 * @param {Int} step            Process Step
 * 
 * @Auth TONY MIN
 */
export function LogSet(val:string, IFcode:string, funcName:string, code:string, step:number ){
    if(val=="i"){
        logger.info(`IF_`+IFcode+`_`+funcName+` `+code+` PROC_STEP:`+step);
    }else if(val=="e"){
        logger.error(`IF_`+IFcode+`_`+funcName+` ERROR:`+code+`E PROC_STEP:`+step);
    }else{
        logger.error(`IF_`+IFcode+`_`+funcName+` ERROR:`+code+`E PROC_STEP:`+step);
    }
}