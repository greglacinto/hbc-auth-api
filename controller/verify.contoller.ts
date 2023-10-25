import { Request, Response } from "express";
import Auth from "../jwt/auth";

export function Verify(req: Request, res: Response){
  console.log("Verify endpoint =====")
  const { email, token } = req.body;
  try {
    Auth.verify(token)
    console.log('user has been authorized')
    return res.status(200).send({"status": 200, "message": "Authorized access"})
  } catch (error) {
    return res.status(401).send({"status": 401, "message": "Unauthorized access"})
  }
}