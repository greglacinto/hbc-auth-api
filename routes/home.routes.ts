import { Router } from "express";
import { Login } from "../controller/login.controller";
import { Verify } from "../controller/verify.contoller";
import { Register } from "../controller/register.controller";

class HomeRoutes {
  router = Router()

  constructor() {
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.post('/register', Register)
    this.router.post('/login', Login)
    this.router.post('/verify', Verify)
  }
}

export default new HomeRoutes().router;