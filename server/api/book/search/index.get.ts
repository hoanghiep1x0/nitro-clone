import { BookModel } from '../../../models'
export default defineEventHandler(async (event) => {
    try {
    
        const query = getQuery(event);

        // validate
        await pagination(query);

        const { page, limit, search, sort } = query;
        const pageNumber = page ?? 1;
        const limitNumber = limit ?? 10;
        const offset = (Number(pageNumber) - 1) * Number(limitNumber);
        var _condition = [{}]
        if (search) {
            _condition.push({ $or: [{ slug: new RegExp(createSlug(search), "ig") }] });
        }
        var options = {
            sort: { createdAt: -1 },
            populate: [{
                path: 'author', select: '_id name slug'
            }, {
                path: 'categories', select: '_id name slug'
            }, {
                path: 'chapters', select: '_id'
            }],
            lean: true,
            offset: offset,
            limit: limit,
        };

        return await BookModel.paginate({ $and: _condition }, options);

    } catch (error) {
        console.log(error);
        throw createError({statusCode: 500, statusMessage: "Error search"})
    }
})