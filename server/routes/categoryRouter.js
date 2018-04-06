"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_1 = require("../models/category");
var CategoryRouter = /** @class */ (function () {
    function CategoryRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    CategoryRouter.prototype.create = function (req, res) {
        // seeding manually
        var categories = [
            new category_1.default({
                categories: "Appetizer",
                order: 0
            }),
            new category_1.default({
                categories: "Lunch Special",
                order: 1
            }),
            new category_1.default({
                categories: "Dinner Special",
                order: 2
            }),
            new category_1.default({
                categories: "Tempura",
                order: 3
            }),
            new category_1.default({
                categories: "Noodles",
                order: 4
            }),
            new category_1.default({
                categories: "Sashimi",
                order: 5
            }),
            new category_1.default({
                categories: "Sushi Nigiri",
                order: 6
            }),
            new category_1.default({
                categories: "Hoso Maki",
                order: 7
            }),
            new category_1.default({
                categories: "Temaki (Sushi Cones)",
                order: 8
            }),
            new category_1.default({
                categories: "Vegetable Sushi Rolls",
                order: 9
            }),
            new category_1.default({
                categories: "Sushi Rolls",
                order: 10
            }),
            new category_1.default({
                categories: "Baked Rolls",
                order: 11
            }),
            new category_1.default({
                categories: "Tempura Rolls",
                order: 12
            }),
            new category_1.default({
                categories: "Chef's Special Rolls",
                order: 13
            }),
            new category_1.default({
                categories: "Teriyaki / Katsu / Don",
                order: 14
            }),
            new category_1.default({
                categories: "Roll Combo",
                order: 15
            }),
            new category_1.default({
                categories: "Platter",
                order: 16
            }),
        ];
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var category = categories_1[_i];
            var allCategory = new category_1.default(category);
            allCategory.save();
        }
        res.send("Databse sucessfully seeded");
    };
    CategoryRouter.prototype.routes = function () {
        this.router.post('/', this.create);
    };
    return CategoryRouter;
}());
var categoryRoutes = new CategoryRouter().router;
exports.default = categoryRoutes;
//# sourceMappingURL=categoryRouter.js.map