"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    create(req, res) {
        const userName = "sushiField";
        const password = "1234";
        let user = new user_1.default({
            userName,
            password
        });
        user.save()
            .then((data) => {
            res.status(201).json({ data });
        })
            .catch((error) => {
            res.status(500).json({ error });
        });
    }
    routes() {
        this.router.post('/', this.create);
    }
}
const userRoutes = new UserRouter().router;
exports.default = userRoutes;
//# sourceMappingURL=userRouter.js.map