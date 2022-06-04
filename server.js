import express from 'express';
import config from './config';
import connectDB from './backend/config/database';
import userRoutes from './backend/routes/userRoutes';
import { notFound, errorHandler } from './backend/middlewares/errorMiddleware';

const server = express();
connectDB();

// to accept JSON data 
server.use(express.json());


server.get('/', (req, res) => {
    res.send('api is running...')
});

server.use('/api/user', userRoutes);

server.use(notFound);
server.use(errorHandler);

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});