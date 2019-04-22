"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devKey = require("./dev");
var prodKey = require("./prod");
exports.keys = (process.env.NODE_ENV === 'production')
    ? prodKey
    : devKey;
// : null
//# sourceMappingURL=keys.js.map