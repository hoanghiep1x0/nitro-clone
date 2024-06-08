
import { Schema, model, Types } from 'mongoose'

import mongoosePaginate from 'mongoose-paginate-v2';

const SliderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String
    },

    book: {
        type: Types.ObjectId,
        required: true,
        ref: 'Book',
    },
}, {
    collection: "Slider",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);

export const SliderModel = model('Slider', SliderSchema);
