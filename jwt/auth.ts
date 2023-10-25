import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config() 
const key: string = process.env.JWT_SECRET_KEY!
const tokenLifetime: string = process.env.JWT_LIFETIME!

class Auth {

  constructor(){
    
  }

  verify( token: string ){
    try {
      const decoded = jwt.verify(token, key)
      return decoded
    } catch (error) {
        throw Error("Unauthorized access")
    }
  }

  sign( email: string ){
    const token = jwt.sign({"email":email}, key, {
      expiresIn: parseInt(tokenLifetime)
    })

    return token
  }
}

export default new Auth
