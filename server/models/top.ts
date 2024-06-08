import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const _TopSchema = new Schema({
    // topic to get books
    book: { type: Types.ObjectId, ref: 'Book' }
}, {
    collection: "Top",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);


export const TopModel = model('Top', _TopSchema);

