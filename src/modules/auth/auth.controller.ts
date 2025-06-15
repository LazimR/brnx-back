import { RequestHandler } from "express";

import authService from "./auth.service";

class AuthController {
    static login: RequestHandler = async (req, res) => {
        const { name, password } = req.body;

        try {
            const user = await authService.login(name, password);
            res.status(200).json(user);
        } catch (error: any) {
            console.error(error);
            res.status(400).json({ error: error });
        }
    }

}

export default AuthController;