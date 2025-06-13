import { Router } from 'express';
import DemandController from './demand.controller';

const demandRoutes = Router();

demandRoutes.post('/', DemandController.create.bind);
demandRoutes.get('/', DemandController.getAllDemands.bind);
demandRoutes.get('/:id', DemandController.getDemand.bind);
demandRoutes.put('/:id', DemandController.update.bind);
demandRoutes.delete('/:id', DemandController.delete.bind);

export default demandRoutes;