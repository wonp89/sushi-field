"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: Number,
        default: null,
        required: true
    }
});
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=user.js.map