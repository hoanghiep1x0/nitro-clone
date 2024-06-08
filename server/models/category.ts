import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const CategorySchema = new Schema({
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
    books:{
        type:  [{ type: Types.ObjectId, ref: 'Book' }],
        default: []
    }
}, {
    collection: "Category",
    timestamps: true ,
    autoIndex: false
}).plugin(mongoosePaginate);


export const CategoryModel = model('Category', CategorySchema);