import express from 'express';
import cors from 'cors';
import userRoutes from './modules/user/user.routes';
import providerRoutes from './modules/provider/provider.routes';
import demandRoutes from './modules/demand/demand.routes';
import actionsRoutes from './modules/actions/actions.routes';

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use('/users', userRoutes);
app.use('/providers', providerRoutes);
app.use('/demands', demandRoutes);
app.use('/actions', actionsRoutes)

export default app;
