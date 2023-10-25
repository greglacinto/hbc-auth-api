"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const key = process.env.JWT_SECRET_KEY;
const tokenLifetime = process.env.JWT_LIFETIME;
class Auth {
    constructor() {
    }
    verify(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, key);
            return decoded;
        }
        catch (error) {
            throw Error("Unauthorized access");
        }
    }
    sign(email) {
        const token = jsonwebtoken_1.default.sign({ "email": email }, key, {
            expiresIn: parseInt(tokenLifetime)
        });
        return token;
    }
}
exports.default = new Auth;
