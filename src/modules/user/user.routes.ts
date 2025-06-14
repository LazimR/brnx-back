import { Router } from "express";
import UserController from "./user.controller";

const userRoutes = Router();

userRoutes.post("/", UserController.create.bind);
userRoutes.get("/:id", UserController.getUser.bind);
userRoutes.get("/", UserController.getAllUsers.bind);
userRoutes.put("/:id", UserController.update.bind);
userRoutes.delete("/:id", UserController.delete.bind);

export default userRoutes;
