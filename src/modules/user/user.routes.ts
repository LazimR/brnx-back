import { Router } from 'express';
import UserController from './user.controller';

const userRoutes = Router();


userRoutes.post("/", UserController.create);
userRoutes.get("/:id", UserController.getUser);
userRoutes.get("/", UserController.getAllUsers);
userRoutes.put("/:id", UserController.update);
userRoutes.delete("/:id", UserController.delete);

export default userRoutes;
