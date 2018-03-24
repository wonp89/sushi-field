import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as path from "path";
import * as http from "http";
import testRouter from './server/routes/testRouter'
import { Request, Response } from 'express';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config(): void {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, 'dist')));
        this.app.get('*'), (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'))
        }
    }

    public routes(): void {
        const router: express.Router = express.Router();
        this.app.use('/test', testRouter);
    }
}

export default new Server().app;

