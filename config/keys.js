"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as devKey from './dev'
var prodKey = require("./prod");
exports.keys = (process.env.BUILD_MODE === 'production')
    ? prodKey
    : null;
//# sourceMappingURL=keys.js.map