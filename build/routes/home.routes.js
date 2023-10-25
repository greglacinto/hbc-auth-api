"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controller/login.controller");
const verify_contoller_1 = require("../controller/verify.contoller");
const register_controller_1 = require("../controller/register.controller");
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/register', register_controller_1.Register);
        this.router.post('/login', login_controller_1.Login);
        this.router.post('/verify', verify_contoller_1.Verify);
    }
}
exports.default = new HomeRoutes().router;
