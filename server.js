import express from 'express';
import config from './config';
import data from './data';
import connectDB from './backend/config/database';

const server = express();
connectDB();


server.get('/', (req, res) => {
    res.send('api is running...')
});

server.get('/api/data', (req, res) => {
    res.send(data)
});

server.get('/api/data/:id', (req, res) => {
    const singleChat = data.find((toDisplay => toDisplay._id === req.params.id));
    res.send(singleChat);
});

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});