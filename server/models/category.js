"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    categories: {
        type: String,
        default: '',
        required: true
    },
    list: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Menu' }]
});
exports.default = mongoose_1.model('Category', CategorySchema);
//# sourceMappingURL=category.js.map