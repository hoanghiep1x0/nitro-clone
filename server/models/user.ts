import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new Schema({

    "name": {
        type: String,
        required: true,
        unique: true,
    },
    "email": {
        type: String,
        required: true,
        unique: true,
    },
    "picture": {
        type: String,
        required: true,
    },
    "role": {
        type: String,
        required: true,
        default: "user"
    },
    "provider": {
        type: String,
        required: true,
        default: "default"

    },

    "password": {
        type: String,
        required: true,
    },
    "verified": {
        type: Boolean,
        default: false
    },
    "suspended": {
        type: Boolean,
        default: false
    },
    "requestedPasswordReset": {
        type: Boolean,
        default: false
    },
}, {
    collection: "User",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);


export const UserModel = model('User', UserSchema);

