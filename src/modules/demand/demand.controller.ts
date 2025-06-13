import { Request, Response } from 'express';
import DemandService from './demand.service';

class DemandController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { id_provider, status, title, description, type } = req.body;
            const demand = await DemandService.createDemand({ id_provider, status, title, description, type });
            return res.status(201).json(demand);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getDemand(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const demand = await DemandService.getDemand(id);
            return res.status(200).json(demand);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

    async getAllDemands(req: Request, res: Response): Promise<Response> {
        try {
            const demands = await DemandService.getAllDemand();
            return res.status(200).json(demands);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const { id_provider, status, title, description, type } = req.body;
            const demand = await DemandService.updateDemand(id, { id_provider, status, title, description, type });
            return res.status(200).json(demand);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            await DemandService.deleteDemand(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }
}

export default new DemandController();