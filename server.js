import express from 'express';
import config from './config';
import connectDB from './backend/config/database';
import { append } from 'express/lib/response';
import userRoutes from './backend/routes/userRoutes';

const server = express();
connectDB();

// to accept JSON data 
server.use(express.json());


server.get('/', (req, res) => {
    res.send('api is running...')
});

server.use('/api/user', userRoutes);

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});