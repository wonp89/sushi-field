"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../models/category");
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
        let menu = new menu_1.default({
            name,
            price,
            about,
            category
        });
        category_1.default.find({ categories: category }, (err, category) => {
            if (err) {
                return res.status(500).json({ err });
            }
            const selectedCategory = category[0];
            selectedCategory.list.push(menu);
            // remove
            // const one = selectedCategory.list.find(x => x._id == "5abaff59a3fd8abbcc172701")
            // selectedCategory.list.splice(one, 1)
            selectedCategory.save()
                .then((data) => {
                res.status(201).json({ data });
            })
                .catch((err) => {
                res.status(500).json({ err });
            });
        });
    }
    routes() {
        this.router.post('/', this.create);
    }
}
const menuRoutes = new MenuRouter().router;
exports.default = menuRoutes;
//# sourceMappingURL=menuRouter.js.map