import { Request, Response } from "express";
import { User } from "../model/user";
import Auth from "../jwt/auth";


export async function Login(req: Request, res: Response){
  const { email, password }: User = req.body
  if (email.length < 1) { 
    throw Error("User email is invalid")
  }
  const token = Auth.sign(email)

  return res.status(200).send({"status": 200, "message": token})
}