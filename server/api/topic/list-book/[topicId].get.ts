

import { TopicModel, BookModel } from "../../../models"
export default defineEventHandler(async (event) => {
    try {

        const query = getQuery(event);
        const topicId = await getRouterParam(event, 'topicId');

        // validate
        await pagination(query);

        const { page, limit, search, sort } = query;
        const pageNumber = page ?? 1;
        const limitNumber = limit ?? 10;
        const offset = (Number(pageNumber) - 1) * Number(limitNumber);



        const key = `topic-fetch-list-book-${page}-${limit}`;

        const data = await useCache(key);

        if (data) {
            return data
        }

        var _condition = [{ topics: { $in: topicId } }]

        var options = {

            populate: [{
                // { path: 'author', select: 'name email' },
                // { path: 'comments', populate: { path: 'author', select: 'name' } }   
                path: 'author', select: '_id name slug'
            }, {
                path: 'categories', select: '_id name slug'
            }, {
                path: 'chapters', select: '_id'
            }],
            sort: {
                "createdAt": "desc"
            },
            lean: true,
            offset: offset,
            limit: limit,
        };

        const result = await BookModel.paginate({
            $and: _condition
        }, options);


        await useCache(key, result, { ttl: 604800 });
        return result;

    } catch (error) {
        throw createError(error)
    }
})