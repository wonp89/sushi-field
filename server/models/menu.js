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
    }
});
// MenuSchema.post('remove', (menu) => {
//     Category.find({categories: this.menu.category}, (err, category) => {
//         if (err) {
//             console.log(err.message)
//         }
//         this.category.list.pull(menu);
//         category.save();
//     });
// });
exports.default = mongoose_1.model('Menu', MenuSchema);
//# sourceMappingURL=menu.js.map