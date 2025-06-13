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

    async getUser(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const user = await UserService.getUser(id);
            return res.status(200).json(user)
        } catch(error:any){
            return res.status(404).json({error: error.message})
        }
    }

    async getAllUsers(req: Request, res: Response){
        try{
            const users = await UserService.getAllUser();
            return res.status(200).json(users);
        } catch(error:any){
            return res.status(500).json({ error: error.message });
        }
    }

    

    async update(req: Request, res:Response){
        try{
            const id = parseInt(req.params.id)
            const { name, password} = req.body
            const result = await UserService.updateUser(id, { name, password })
            return res.status(200).json(result)
        }catch(error:any){
            return res.status(400).json({error: error.message})
        }
    }

    async delete(req: Request,res: Response){
        try{
            const id = parseInt(req.params.id)
            const result = await UserService.deleteUser(id)
            return res.status(204).send()
        }catch(error:any){
            return res.status(404).json({ error: error.message})
        }
    }
}

export default new UserController();