

import { ChapterModel, BookModel } from '../../../models'
export default defineEventHandler(async (event) => {
    try {

        const query = getQuery(event);
        const slug = await getRouterParam(event, 'slug');
        // validate
        await pagination(query);

        const { page, limit, search, sort } = query;
        const pageNumber = page ?? 1;
        const limitNumber = limit ?? 12;
        const offset = (Number(pageNumber) - 1) * Number(limitNumber);

        const key = `book-${slug}-list-chapter-${page}-${limit}`;

        const data = await useCache(key);

        if (data) {
            return data;
        }

        const book = await BookModel.findOne({ slug: slug });

        if (!book) {
            throw createError({ status: 404, statusMessage: "Not find book by slug" });
        }

        var _condition = [{ book: book._id }]

        var options = {
            sort: { createdAt: 1 },
            lean: true,
            offset: offset,
            limit: limit,
        };

        const result =  await ChapterModel.paginate({ $and: _condition }, options);

        if (result) {
            // new cache 7 ngay
            await useCache(key, result, {ttl: 604800})
        }
        
         return result;
    } catch (error) {
        throw createError(error)
    }
})