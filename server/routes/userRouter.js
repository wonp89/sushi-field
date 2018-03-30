"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var user_1 = require("../models/user");
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.create = function (req, res) {
        var username = "sushiField";
        var password = bcrypt.hashSync("1234", 10);
        var user = new user_1.default({
            username: username,
            password: password
        });
        user.save();
        res.send("User sucessfully saved");
    };
    UserRouter.prototype.signin = function (req, res) {
        user_1.default.findOne({ username: req.body.username }, function (err, user) {
            if (err)
                return res.status(500).json({ err: err });
            if (!user)
                return res.status(401).json({ err: { message: 'Wrong Username' } });
            if (!bcrypt.compareSync(req.body.password, user.password))
                return res.status(401).json({ err: { message: "Wrong Password" } });
            var token = jwt.sign({ user: user }, 'secret', { expiresIn: 10800 });
            res.status(200).json({
                mssage: 'You are logged in',
                token: token
            });
        });
    };
    UserRouter.prototype.routes = function () {
        this.router.post('/', this.create);
        this.router.post('/signin', this.signin);
    };
    return UserRouter;
}());
var userRoutes = new UserRouter().router;
exports.default = userRoutes;
//# sourceMappingURL=userRouter.js.map