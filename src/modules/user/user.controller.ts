import { Request, Response } from 'express';

import UserService from './user.service';

class UserController{
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, password } = req.body;
            const user = await UserService.createUser({ name, password });
            return res.status(201).json(user);
        } catch (error:any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getUser(req: Request, res: Response){}
}