import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as cookieParser from 'cookie-parser';
import * as path from "path";
import * as http from "http";
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

import userRouter from './server/routes/userRouter';
import menuRouter from './server/routes/menuRouter';
import categoryRouter from './server/routes/categoryRouter';

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.mongooseConnect();
        this.routes();
    }

    public mongooseConnect(): void {
        // const MONGO_URI: string = 'mongodb://localhost:27017/sushi-field';
        const MONGO_URI: string = 'mongodb://sushiFieldUser:salmontuna@ds229549.mlab.com:29549/sushifield';
        mongoose.connect(MONGO_URI, (err) => {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log('Connected to MongoDb');
            }
        });
    }

    public config(): void {

        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, '/dist')));
        this.app.get('*'), (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'))
        }

        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
            next();
        });

    }

    public routes(): void {
        const router: express.Router = express.Router();
        this.app.use('/user', userRouter);
        this.app.use('/menu', menuRouter);
        this.app.use('/category', categoryRouter);
    }
}

export default new Server().app;

