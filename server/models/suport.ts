import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const SuportSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    ticket: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String
    },

    replies: [
        {
            user: { type: Types.ObjectId, ref: 'User' },
            content: {
                type: String
            },
            created: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    closed: {
        type: Boolean,
        default: false
    }
}, {
    collection: "Suport",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);


export const SuportModel = model('Suport', SuportSchema);

