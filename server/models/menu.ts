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
    }
});

// remove id inside cateogory-list
MenuSchema.post('remove', (menu: any): void => {
    Category.find({categories: menu.category}, (err, category: any) => {
        if (err) {
            console.log(err.message)
        }
        category[0].list.pull(menu);
        category[0].save();
    });
});

export default model('Menu', MenuSchema)

