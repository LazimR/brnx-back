import { Router } from "express";

import AuthController from "./auth.controller";

const authRoutes = Router();

authRoutes.get("/login", AuthController.login.bind);

export default authRoutes;