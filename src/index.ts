
import { URLController } from './controller/URLController';
import express, { Request,Response, NextFunction} from 'express';
import { MongoConnection } from './database/mongo-connection';

const api = express();

const localhost = 'http://localhost';
const port = 5000;

api.use(express.json());

const database = new MongoConnection()
database.connect();




api.listen(port, () => console.log(
    console.log(`Application listen on ${localhost}:${port}`)
));

const urlController = new URLController();

api.post('/shorten', urlController.shorten);

api.get('/test', (req:Request, res:Response, next:NextFunction) => {
    res.json({
        "success": true
    })
})  

api.get('/:hash', urlController.redirect);