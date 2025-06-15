import { Request, Response, RequestHandler } from 'express';
import ProviderService from './provider.service';

class ProviderController {
    static create: RequestHandler = async (req, res) => {
        try {
            const { name, responsible_name, email } = req.body;
            const provider = await ProviderService.createProvider({ name, responsible_name, email });
            res.status(201).json(provider);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static getProvider: RequestHandler = async(req, res)=> {
        try {
            const id = parseInt(req.params.id);
            const provider = await ProviderService.getProvider(id);
            res.status(200).json(provider);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static getAllProviders: RequestHandler = async (req, res)=> {
        try {
            const providers = await ProviderService.getAllProvider();
            res.status(200).json(providers);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static update: RequestHandler = async (req, res)=> {
        try {
            const id = parseInt(req.params.id);
            const { name, responsible_name, email } = req.body;
            const provider = await ProviderService.updateProvider(id, { name, responsible_name, email });
            res.status(200).json(provider);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static delete: RequestHandler = async (req, res)=>{
        try{
            const id = parseInt(req.params.id);
            const result = await ProviderService.deleteProvider(id);
            res.status(204).send();
        }catch(error: any){
            res.status(404).json({ error: error.message})
        }
    }
}

export default ProviderController;