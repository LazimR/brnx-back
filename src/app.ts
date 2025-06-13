import express from 'express';
import cors from 'cors';
import userRoutes from './modules/user/user.routes';
import providerRoutes from './modules/provider/provider.routes';

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use('/users', userRoutes);
app.use('/providers', providerRoutes);

export default app;
