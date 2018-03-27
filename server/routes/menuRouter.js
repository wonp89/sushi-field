"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_1 = require("../models/menu");
class MenuRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    create(req, res) {
        const name = req.body.name;
        const price = req.body.price;
        const about = req.body.about;
        const category = req.body.category;
        // const categoryId: Obejct = {"_id":}
        let menu = new menu_1.default({
            name,
            price,
            about,
            category,
        });
        menu.save()
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
const menuRoutes = new MenuRouter().router;
exports.default = menuRoutes;
//# sourceMappingURL=menuRouter.js.map