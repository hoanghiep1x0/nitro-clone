
import { Types } from 'mongoose'
import { Schema, model, Types } from 'mongoose'

import mongoosePaginate from 'mongoose-paginate-v2';

const ChapterSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String
    },
    chap: {
        type: Number,
        default: 0
    },
    audio: {
        type: 'string'
    },

    view: {
        type: Number,
        default: 0
    },

    status: {
        type: Boolean,
        default: false
    },

    vip: {
        type: Boolean,
        default: false
    },

    book: {
        type: Types.ObjectId,
        required: true,
        ref: 'Book',
    },

    seoTl: {
        type: 'string'
    },
    seoDesc: {
        type: 'string'
    },
    seoKey: {
        type: 'string'
    }
},{
    collection: "Chapter",
    timestamps: true ,
    autoIndex: false
}).plugin(mongoosePaginate);

export const ChapterModel = model('Chapter', ChapterSchema);