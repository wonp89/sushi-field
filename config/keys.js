"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devKey = require("./dev");
var prodKey = require("./prod");
exports.keys = (process.env.BUILD_MODE === 'production')
    ? prodKey
    : devKey;
//# sourceMappingURL=keys.js.map