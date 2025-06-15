import { RequestHandler } from 'express';
import ActionsService from './actions.service';

class ActionsController {
    static create :RequestHandler = async (req, res) => {
        try {
            const { id_demand, technician_name, description } = req.body;
            const action = await ActionsService.createAction({ id_demand:parseInt(id_demand), technician_name, description });
            res.status(201).json(action);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static getAction :RequestHandler = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const action = await ActionsService.getAction(id);
            res.status(200).json(action);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static getAllActionsByDemandId :RequestHandler = async (req, res) => {
        try {
            const demandId = parseInt(req.params.id_demand)
            const actions = await ActionsService.getAllActionsByDemandaId(demandId);
            res.status(200).json(actions);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static getAllActions :RequestHandler = async (req, res) => {
        try {
            const actions = await ActionsService.getAllActions();
            res.status(200).json(actions);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static update :RequestHandler = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const { id_demand, technician_name, description } = req.body;
            const action = await ActionsService.updateAction(id, { id_demand, technician_name, description });
            res.status(200).json(action);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static delete :RequestHandler = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            await ActionsService.deleteAction(id);
            res.status(204).send();
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default ActionsController;