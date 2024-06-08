import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';
const ScriptSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    order: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    position: {
        type: String,
        default: "body"
    }
}, {
    collection: "Script",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);


export const ScriptModel = model('Script', ScriptSchema);

