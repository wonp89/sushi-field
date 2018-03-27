import { model, Schema } from 'mongoose';
import Category from './category'

const MenuSchema: Schema = new Schema({
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
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }

});

MenuSchema.post('remove', (menu) => {
    Category.findById(this.menu.categoryId, (err, category) => {
        if (err) {
            console.log(err.message)
        }
        this.category.list.pull(menu);
        category.save();
    });
});

export default model('Menu', MenuSchema)

