
import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const BookSchema = new Schema({
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
    img: {
        type: String
    },
    audio: {
        type: String
    },
    rating: [{
        uid: {
            type: Types.ObjectId,
            ref: 'User'
        },
        rate: { type: Number }
    }],

    comments: [{
        uid: {
            type: Types.ObjectId,
            ref: 'User'
        },
        text: { type: String }
    }],

    view: {
        type: Number,
        default: 0
    },

    status: {
        type: Boolean,
        default: false
    },

    author: {
        type: Types.ObjectId,
        required: true,
        ref: 'Author',
    },

    categories: {
        type: [{ type: Types.ObjectId, ref: 'Category' }],
        default: []
    },

    // nhúng chapter id
    chapters: {
        type: [{ type: Types.ObjectId, ref: 'Chapter' }],
        default: []
    },
    // nhúng vào topics

    topics: {
        type: [{ type: Types.ObjectId, ref: 'Topic' }],
        default: []
    },
    seoTl: {
        type: String
    },
    seoDesc: {
        type: String
    },
    seoKey: {
        type: String
    },

    slider: {
        type: Types.ObjectId,
        ref: 'Slider',
    },

    new: {
        type: Types.ObjectId,
        ref: 'New',
    },
    top: {
        type: Types.ObjectId,
        ref: 'Top',
    }
}, {
    collection: "Book",
    timestamps: true
}).plugin(mongoosePaginate);

export const BookModel = model('Book', BookSchema);
