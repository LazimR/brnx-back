import { Request, Response, RequestHandler } from 'express';
import DemandService from './demand.service';

class DemandController {
    static create: RequestHandler = async (req, res) =>{
        try {
            const { id_provider, status, title, description, type } = req.body;
            const demand = await DemandService.createDemand({ id_provider: parseInt(id_provider), status, title, description, type });
            res.status(201).json(demand);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static getDemand: RequestHandler = async (req, res) =>{
        try {
            const id = parseInt(req.params.id);
            const demand = await DemandService.getDemand(id);
            res.status(200).json(demand);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static getAllDemandsByProviderId: RequestHandler =async (req, res) =>{
        try {
            const provider_id = parseInt(req.params.provider_id);
            const demands = await DemandService.getAllDemandByProviderId(provider_id);
            res.status(200).json(demands);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static getAllDemands: RequestHandler =async (req, res) =>{
        try {
            const demands = await DemandService.getAllDemand();
            res.status(200).json(demands);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static update: RequestHandler =async (req, res) =>{
        try {
            const id = parseInt(req.params.id);
            const { id_provider, status, title, description, type } = req.body;
            const demand = await DemandService.updateDemand(id, { id_provider, status, title, description, type });
            res.status(200).json(demand);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static delete: RequestHandler =async (req, res) =>{
        try {
            const id = parseInt(req.params.id);
            await DemandService.deleteDemand(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default DemandController;