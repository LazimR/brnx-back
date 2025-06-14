import { Request, Response } from "express";

import authService from "./auth.service";

class AuthController {
    async login(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        try {
            const user = await authService.login(username, password);
            return res.status(200).json(user);
        } catch (error: any) {
            console.error(error);
            return res.status(400).json({ error: error.message });
        }
    }

}

export default new AuthController();