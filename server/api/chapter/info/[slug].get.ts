

import { ChapterModel, BookModel } from '../../../models'
export default defineEventHandler(async (event) => {
    try {

        const { chap } = getQuery(event);
        const slug = await getRouterParam(event, 'slug');
        // validat
        const key = `book-${slug}-info-chapter-${chap}`;

        const data = await useCache(key);

        if (data) {
            return data;
        }

        const book = await BookModel.findOne({ slug: slug });

        if (!book) {
            throw createError({ status: 404, statusMessage: "Not find book by slug" });
        }



        const result = await ChapterModel.findOne({ book: book._id, chap: chap }).populate([{
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
        }]);

        // 360 ngay
        if (result) {
            // new cache 7 ngay
            await useCache(key, result, { ttl: 604800 })
        }

        return result;
    } catch (error) {
        throw createError(error)
    }
})