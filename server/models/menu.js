"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const category_1 = require("./category");
const MenuSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    price: {
        type: Number,
        default: null,
        required: true
    },
    about: {
        type: String,
        default: '',
        required: true
    },
    category: {
        type: String,
        default: '',
        required: true
    },
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
MenuSchema.post('remove', (menu) => {
    category_1.default.findById(this.menu.categoryId, (err, category) => {
        if (err) {
            console.log(err.message);
        }
        this.category.list.pull(menu);
        category.save();
    });
});
exports.default = mongoose_1.model('Menu', MenuSchema);
//# sourceMappingURL=menu.js.map