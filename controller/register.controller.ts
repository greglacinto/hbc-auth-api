import { Request, Response } from "express";
import { User } from "../model/user";

export function Register(req: Request, res: Response){
  const { email, password } : User = req.body;
  console.log(email, password)

  return res.status(200).send({"status": 200, "message": "Register endpoint is up"})
}