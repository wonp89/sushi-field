"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const testRouter_1 = require("./server/routes/testRouter");
const userRouter_1 = require("./server/routes/userRouter");
const menuRouter_1 = require("./server/routes/menuRouter");
const categoryRouter_1 = require("./server/routes/categoryRouter");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.mongooseConnect();
        this.routes();
    }
    mongooseConnect() {
        const MONGO_URI = 'mongodb://localhost:27017/sushi-field';
        mongoose.connect(MONGO_URI, (err) => {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log('Connected to MongoDb');
            }
        });
    }
    config() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, 'dist')));
        this.app.get('*'), (req, res) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'));
        };
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
            next();
        });
    }
    routes() {
        const router = express.Router();
        this.app.use('/test', testRouter_1.default);
        this.app.use('/user', userRouter_1.default);
        this.app.use('/menu', menuRouter_1.default);
        this.app.use('/category', categoryRouter_1.default);
    }
}
exports.default = new Server().app;
//# sourceMappingURL=server.js.map