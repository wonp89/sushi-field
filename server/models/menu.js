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
    }
});
// remove id inside cateogory-list
MenuSchema.post('remove', (menu) => {
    category_1.default.find({ categories: menu.category }, (err, category) => {
        if (err) {
            console.log(err.message);
        }
        category[0].list.pull(menu);
        category[0].save();
    });
});
exports.default = mongoose_1.model('Menu', MenuSchema);
//# sourceMappingURL=menu.js.map