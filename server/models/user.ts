import { model, Schema } from 'mongoose';

const UserSchema:  Schema = new Schema({
    userName: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: null,
        required: true
    }
})

export default model('User', UserSchema)