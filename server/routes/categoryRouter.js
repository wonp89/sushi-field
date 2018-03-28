"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//This is for creating categories manually
const express_1 = require("express");
const category_1 = require("../models/category");
class CategoryRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    create(req, res) {
        const categories = "Appetizer";
        let category = new category_1.default({
            categories
        });
        category.save()
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
const categoryRoutes = new CategoryRouter().router;
exports.default = categoryRoutes;
//# sourceMappingURL=categoryRouter.js.map