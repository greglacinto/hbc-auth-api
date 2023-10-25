"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
const auth_1 = __importDefault(require("../jwt/auth"));
function Verify(req, res) {
    console.log("Verify endpoint =====");
    const { email, token } = req.body;
    try {
        auth_1.default.verify(token);
        console.log('user has been authorized');
        return res.status(200).send({ "status": 200, "message": "Authorized access" });
    }
    catch (error) {
        return res.status(401).send({ "status": 401, "message": "Unauthorized access" });
    }
}
exports.Verify = Verify;
