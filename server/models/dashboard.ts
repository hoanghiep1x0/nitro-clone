import { Schema, model, Types } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';
const DashboardSchema = new Schema({
    member: {
        type: Number,
        default: 0
    },
    vips: {
        type: Number,
        default: 0
    },
    authors: {
        type: Number,
        default: 0
    },
    categories: {
        type: Number,
        default: 0
    },
    books: {
        type: Number,
        default: 0
    },
    news: {
        type: Number,
        default: 0
    },
    tops:
    {
        type: Number,
        default: 0
    },
    sliders: {
        type: Number,
        default: 0
    },
    topics: {
        type: Number,
        default: 0
    },
    request: {
        type: Number,
        default: 0
    },
    suport: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, {
    collection: "Dashboard",
    timestamps: true,
    autoIndex: false
}).plugin(mongoosePaginate);


export const DashboardModel = model('Dashboard', DashboardSchema);

