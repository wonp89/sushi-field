import { model, Schema } from 'mongoose';

const CategorySchema: Schema = new Schema({
    category: {
        type: String,
        default: '',
        required: true
    },
    list: [{
        type: Schema.Types.ObjectId,
        ref: 'Menu'
    }]
});

export default model('Category', CategorySchema)

