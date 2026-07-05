import type { Request,Response } from "express";
import { signupPayLoadModel } from "./models.js";
import {db} from "../../db/index.js";
import { usersTable } from "../../db/schema.js";
import { eq } from "drizzle-orm";

class AuthenticationControllers{

    public async handlelSignup(req:Request,res:Response){
       const validationResult = await signupPayLoadModel.safeParseAsync(req.body)

       if(validationResult.error){
        return res.status(400).json({message:"body valudation failed",error:validationResult.error});
       }

       const {firstName,lastName,email,password} = validationResult.data

     const userEmailResult =   await db.select().from(usersTable).where(eq(usersTable.email,email))

     if(userEmailResult.length > 0) return res.status(400).json({error:'duplicat entry',message:'user with this ${email} is already exist'})

        
    }


}



export default AuthenticationControllers;