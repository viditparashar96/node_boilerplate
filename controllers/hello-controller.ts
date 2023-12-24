import { Request,Response } from "express";


export const hello_world=(req:Request,res:Response)=>{
    
    res.send("Hello World!!!!");
}