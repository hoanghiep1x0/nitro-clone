import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';
const AuthorSchema = new Schema({
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

    // nhúng books id của tác giả
    books:{
        type:  [{ type: Types.ObjectId, ref: 'Book' }],
        default: []
    }

}, {
    collection: "Author",
    timestamps: true
}).plugin(mongoosePaginate);


export const AuthorModel = model('Author', AuthorSchema);

