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
    get(req, res) {
        category_1.default.find()
            .populate('list', ['name', 'price', 'about', 'category'])
            .exec((err, data) => {
            err
                ? res.status(500).json({ err })
                : res.status(200).json({ data });
        });
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
        menu.save()
            .then((data) => {
            category_1.default.find({ categories: category }, (err, category) => {
                if (err) {
                    return res.status(500).json({ err });
                }
                const selectedCategory = category[0];
                selectedCategory.list.push(data._id);
                selectedCategory.save()
                    .then((result) => {
                    category_1.default.find({ _id: result._id })
                        .populate('list', ['name', 'price', 'about', 'category'])
                        .exec((err, data) => err
                        ? res.status(500).json({ err })
                        : res.status(201).json({ data }));
                });
            });
        });
    }
    update(req, res) {
        menu_1.default.findById(req.params.id, (err, menu) => {
            if (err) {
                return res.status(500).json({ err });
            }
            menu.name = req.body.name;
            menu.price = req.body.price;
            menu.about = req.body.about;
            menu.category = req.body.category;
            menu.save((err, result) => err
                ? res.status(500).json({ err })
                : res.status(201).json({ result }));
        });
    }
    remove(req, res) {
        menu_1.default.findById(req.params.id, (err, menu) => {
            if (err) {
                return res.status(500).json({ err });
            }
            menu.remove((err, result) => err
                ? res.status(500).json({ err })
                : res.status(201).json({ result }));
        });
    }
    routes() {
        this.router.get('/', this.get);
        this.router.post('/', this.create);
        this.router.patch('/:id', this.update);
        this.router.delete('/:id', this.remove);
    }
}
const menuRoutes = new MenuRouter().router;
exports.default = menuRoutes;
//# sourceMappingURL=menuRouter.js.map