import { Router } from 'express';
import DemandController from './demand.controller';

const demandRoutes = Router();

demandRoutes.post('/', DemandController.create);
demandRoutes.get('/', DemandController.getAllDemands);
demandRoutes.get('/provider/:provider_id', DemandController.getAllDemandsByProviderId)
demandRoutes.get('/:id', DemandController.getDemand);
demandRoutes.put('/:id', DemandController.update);
demandRoutes.delete('/:id', DemandController.delete);

export default demandRoutes;