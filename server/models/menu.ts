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


export default model('Menu', MenuSchema)