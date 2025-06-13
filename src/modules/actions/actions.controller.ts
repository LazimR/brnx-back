import { Request, Response } from 'express';
import ActionsService from './actions.service';

class ActionsController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { id_demand, technician_name, description } = req.body;
            const action = await ActionsService.createAction({ id_demand, technician_name, description });
            return res.status(201).json(action);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getAction(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const action = await ActionsService.getAction(id);
            return res.status(200).json(action);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

    async getAllActions(req: Request, res: Response): Promise<Response> {
        try {
            const actions = await ActionsService.getAllActions();
            return res.status(200).json(actions);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const { id_demand, technician_name, description } = req.body;
            const action = await ActionsService.updateAction(id, { id_demand, technician_name, description });
            return res.status(200).json(action);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            await ActionsService.deleteAction(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export default new ActionsController();