"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as devKey from './dev';
var prodKey = require("./prod");
exports.keys = (process.env.NODE_ENV === 'production')
    ? prodKey
    // : devKey as any;
    : null;
//# sourceMappingURL=keys.js.map