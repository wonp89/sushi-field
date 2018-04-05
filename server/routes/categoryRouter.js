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