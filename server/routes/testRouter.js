"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class TestRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    test(req, res) {
        res.send({
            name: "won Park"
        });
    }
    routes() {
        this.router.get('/', this.test);
    }
}
const testRoutes = new TestRouter().router;
// testRoutes.routes();
exports.default = testRoutes;
//# sourceMappingURL=testRouter.js.map