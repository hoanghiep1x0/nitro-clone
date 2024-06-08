import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const TopicSchema = new Schema({
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
    seoTl: {
        type: String
    },
    seoDesc: {
        type: String
    },
    seoKey: {
        type: String
    },

    // topic to get books
    books:{
        type:  [{ type: Types.ObjectId, ref: 'Book' }],
        default: []
    }
}, {
    collection: "Topic",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);


export const TopicModel = model('Topic', TopicSchema);

