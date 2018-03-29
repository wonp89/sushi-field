"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//route for seeding category database: http://localhost:3000/category
const express_1 = require("express");
const category_1 = require("../models/category");
class CategoryRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    create(req, res) {
        const categories = [
            new category_1.default({
                categories: "Appetizer"
            }),
            new category_1.default({
                categories: "Sushi"
            }),
            new category_1.default({
                categories: "Tempura"
            }),
            new category_1.default({
                categories: "Noodle"
            }),
            new category_1.default({
                categories: "Drink"
            })
        ];
        for (let category of categories) {
            let allCategory = new category_1.default(category);
            allCategory.save();
        }
        res.send("databse sucessfully seeded");
    }
    routes() {
        this.router.post('/', this.create);
    }
}
const categoryRoutes = new CategoryRouter().router;
exports.default = categoryRoutes;
//# sourceMappingURL=categoryRouter.js.map