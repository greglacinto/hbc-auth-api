"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
function Register(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    return res.status(200).send({ "status": 200, "message": "Register endpoint is up" });
}
exports.Register = Register;
