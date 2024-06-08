import { defineEventHandler, getQuery } from 'h3'

interface Track {
    id: number,
    title: string;
    src: string;
}

// Dữ liệu bài hát mẫu


import { ChapterModel } from '../../../models'
export default defineEventHandler(async (event) => {

    const { page = '1', limit = '12', startId, book } = getQuery(event)
    const limitNumber = parseInt(limit as string)
    const start = parseInt(startId as string)

    const tracks = await ChapterModel.find({ $and: [{ book: book }, { chap: { $gte: start, $lte: start + limitNumber } }] }).populate([{
        // { path: 'author', select: 'name email' },
        // { path: 'comments', populate: { path: 'author', select: 'name' } }   
        path: 'book',
        populate: [{
            path: 'author', select: '_id name slug'
        }, {
            path: 'categories', select: '_id name slug'
        }, {
            path: 'chapters', select: '_id'
        }]
    }])
  
    return { tracks }
})
