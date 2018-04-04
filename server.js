"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var path = require("path");
var mongoose = require("mongoose");
var userRouter_1 = require("./server/routes/userRouter");
var menuRouter_1 = require("./server/routes/menuRouter");
var categoryRouter_1 = require("./server/routes/categoryRouter");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.mongooseConnect();
        this.routes();
    }
    Server.prototype.mongooseConnect = function () {
        var MONGO_URI = 'mongodb://localhost:27017/sushi-field';
        // const MONGO_URI: string = 'mongodb://sushiFieldUser:salmontuna@ds229549.mlab.com:29549/sushifield';
        mongoose.connect(MONGO_URI, function (err) {
            if (err) {
                console.log(err.message);
            }
            else {
                console.log('Connected to MongoDb');
            }
        });
    };
    Server.prototype.config = function () {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, '/dist')));
        this.app.get('*'), function (req, res) {
            res.sendFile(path.join(__dirname, 'dist/index.html'));
        };
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/user', userRouter_1.default);
        this.app.use('/menu', menuRouter_1.default);
        this.app.use('/category', categoryRouter_1.default);
    };
    return Server;
}());
exports.default = new Server().app;
//# sourceMappingURL=server.js.map