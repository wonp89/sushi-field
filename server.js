"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const testRouter_1 = require("./server/routes/testRouter");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, 'dist')));
        this.app.get('*'), (req, res) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'));
        };
    }
    routes() {
        const router = express.Router();
        this.app.use('/test', testRouter_1.default);
    }
}
exports.default = new Server().app;
//# sourceMappingURL=server.js.map