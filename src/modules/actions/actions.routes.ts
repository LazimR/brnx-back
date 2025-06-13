import { Router } from 'express';
import ActionsController from './actions.controller';

const actionsRoutes = Router();

actionsRoutes.post('/',  ActionsController.create.bind);
actionsRoutes.get('/',  ActionsController.getAllActions.bind);
actionsRoutes.get('/:id',  ActionsController.getAction.bind);
actionsRoutes.put('/:id',  ActionsController.update.bind);
actionsRoutes.delete('/:id',  ActionsController.delete.bind);

export default actionsRoutes;