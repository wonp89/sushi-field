"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const user_1 = require("../models/user");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    create(req, res) {
        const username = "sushiField";
        const password = bcrypt.hashSync("1234", 10);
        let user = new user_1.default({
            username,
            password
        });
        user.save();
        res.send("User sucessfully saved");
    }
    signin(req, res) {
        user_1.default.findOne({ username: req.body.username }, (err, user) => {
            if (err)
                return res.status(500).json({ err });
            if (!user)
                return res.status(401).json({ err: { message: 'Wrong Username' } });
            if (!bcrypt.compareSync(req.body.password, user.password))
                return res.status(401).json({ err: { message: "Wrong Password" } });
            let token = jwt.sign({ user: user }, 'secret', { expiresIn: 10800 });
            res.status(200).json({
                mssage: 'You are logged in',
                token: token
            });
        });
    }
    routes() {
        this.router.post('/', this.create);
        this.router.post('/signin', this.signin);
    }
}
const userRoutes = new UserRouter().router;
exports.default = userRoutes;
//# sourceMappingURL=userRouter.js.map