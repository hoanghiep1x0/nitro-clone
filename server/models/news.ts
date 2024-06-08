import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';

const NewSchema = new Schema({
    book: { type: Types.ObjectId, ref: 'Book' }
}, {
    collection: "News",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);


export const NewModel = model('New', NewSchema);

