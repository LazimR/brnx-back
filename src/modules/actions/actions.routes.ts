import { Router } from 'express';
import ActionsController from './actions.controller';

const actionsRoutes = Router();

actionsRoutes.post('/',  ActionsController.create);
actionsRoutes.get('/',  ActionsController.getAllActions);
actionsRoutes.get('/demand/:id_demand',  ActionsController.getAllActionsByDemandId);
actionsRoutes.get('/:id',  ActionsController.getAction);
actionsRoutes.put('/:id',  ActionsController.update);
actionsRoutes.delete('/:id',  ActionsController.delete);

export default actionsRoutes;