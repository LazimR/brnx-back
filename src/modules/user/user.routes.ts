import { Router } from "express";
import UserController from "./user.controller";
import { asyncHandler } from "../../utils/asyncHadler";

const userRoutes = Router();

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
userRoutes.post("/", asyncHandler(UserController.create.bind(UserController)));
userRoutes.get("/:id", asyncHandler(UserController.getUser.bind(UserController)));
userRoutes.get("/", asyncHandler(UserController.getAllUsers.bind(UserController)));
userRoutes.put("/:id", asyncHandler(UserController.update.bind(UserController)));
userRoutes.delete("/:id", asyncHandler(UserController.delete.bind(UserController)));

export default userRoutes;
