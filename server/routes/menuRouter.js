"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_1 = require("../models/category");
var menu_1 = require("../models/menu");
var MenuRouter = /** @class */ (function () {
    function MenuRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    MenuRouter.prototype.get = function (req, res) {
        category_1.default.find().sort({ "order": 1 })
            .populate('list', ['name', 'price', 'about', 'category'])
            .exec(function (err, data) {
            if (err)
                return res.status(500).json({ err: err });
            res.status(201).json({ data: data });
        });
    };
    MenuRouter.prototype.create = function (req, res) {
        var name = req.body.name;
        var price = req.body.price;
        var about = req.body.about;
        var category = req.body.category;
        var menu = new menu_1.default({
            name: name,
            price: price,
            about: about,
            category: category
        });
        menu.save()
            .then(function (data) {
            category_1.default.find({ categories: category }, function (err, category) {
                if (err)
                    return res.status(500).json({ err: err });
                var selectedCategory = category[0];
                selectedCategory.list.push(data._id);
                selectedCategory.save({ _id: selectedCategory._id })
                    .then(function (result) {
                    category_1.default.find({ _id: result._id })
                        .populate('list', ['name', 'price', 'about', 'category'])
                        .exec(function (err, data) {
                        if (err)
                            return res.status(500).json({ err: err });
                        res.status(201).json({ data: data });
                    });
                });
            });
        });
    };
    MenuRouter.prototype.update = function (req, res) {
        menu_1.default.findById(req.params.id, function (err, menu) {
            if (err)
                return res.status(500).json({ err: err });
            menu.name = req.body.name;
            menu.price = req.body.price;
            menu.about = req.body.about;
            menu.category = req.body.category;
            menu.save(function (err, result) {
                if (err)
                    return res.status(500).json({ err: err });
                res.status(201).json({ result: result });
            });
        });
    };
    MenuRouter.prototype.remove = function (req, res) {
        menu_1.default.findById(req.params.id, function (err, menu) {
            if (err)
                return res.status(500).json({ err: err });
            menu.remove(function (err, result) {
                if (err)
                    return res.status(500).json({ err: err });
                res.status(201).json({ result: result });
            });
        });
    };
    MenuRouter.prototype.routes = function () {
        this.router.get('/', this.get);
        this.router.post('/', this.create);
        this.router.patch('/:id', this.update);
        this.router.delete('/:id', this.remove);
    };
    return MenuRouter;
}());
var menuRoutes = new MenuRouter().router;
exports.default = menuRoutes;
//# sourceMappingURL=menuRouter.js.map