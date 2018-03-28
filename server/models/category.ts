import { model, Schema } from 'mongoose';

const CategorySchema: Schema = new Schema({
    categories: {
        type: String,
        default: '',
        required: true
    },
    list: []
});

export default model('Category', CategorySchema)

