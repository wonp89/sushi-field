"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
// MenuSchema.post('remove', (menu) => {
//     Category.findById(menu.categoryId, (err, category) => {
//         category.list.pull(menu);
//         category.save();
//     });
// });
exports.default = mongoose_1.model('Menu', MenuSchema);
//# sourceMappingURL=menu.js.map