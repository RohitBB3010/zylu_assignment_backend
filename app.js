import bodyParser from 'body-parser';
import express from 'express';
import { getVehiclesData } from './vehicles_controller.js';
import { connectMongodb } from './database.js';;
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PUSH, DELETE, PATCH');
    next();
});

app.get('/get-vehicles', getVehiclesData);

const startServer = async () => {
    try{

        await connectMongodb(process.env.mongo_url);

        app.listen(process.env.port);
        
    } catch (err){
        console.log(err);
    }
}

startServer();
