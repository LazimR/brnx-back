import { Request, Response } from 'express';
import ProviderService from './provider.service';

class ProviderController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, responsible_name, email } = req.body;
            const provider = await ProviderService.createProvider({ name, responsible_name, email });
            return res.status(201).json(provider);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getProvider(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const provider = await ProviderService.getProvider(id);
            return res.status(200).json(provider);
        } catch (error: any) {
            return res.status(404).json({ error: error.message });
        }
    }

    async getAllProviders(req: Request, res: Response): Promise<Response> {
        try {
            const providers = await ProviderService.getAllProvider();
            return res.status(200).json(providers);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = parseInt(req.params.id);
            const { name, responsible_name, email } = req.body;
            const provider = await ProviderService.updateProvider(id, { name, responsible_name, email });
            return res.status(200).json(provider);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response){
        try{
            const id = parseInt(req.params.id);
            const result = await ProviderService.deleteProvider(id);
            return res.status(204).send();
        }catch(error: any){
            return res.status(404).json({ error: error.message})
        }
    }
}

export default new ProviderController();