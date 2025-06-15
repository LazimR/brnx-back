import { Request, Response, RequestHandler } from 'express';
import UserService from './user.service';

class UserController {
    static create: RequestHandler = async (req, res) => {
        try {
            const { name, password } = req.body;
            const user = await UserService.createUser({ name, password });
            res.status(201).json(user);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    };

    static getUser: RequestHandler = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const user = await UserService.getUser(id);
            res.status(200).json(user);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    };

    static getAllUsers: RequestHandler = async (req, res) => {
        try {
            const users = await UserService.getAllUser();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    };

    static update: RequestHandler = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const { name, password } = req.body;
            const result = await UserService.updateUser(id, { name, password });
            res.status(200).json(result);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    };

    static delete: RequestHandler = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            await UserService.deleteUser(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    };
}

export default UserController;