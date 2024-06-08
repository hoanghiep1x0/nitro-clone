

import { CategoryModel, BookModel } from '../../../models'
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

        const key = `home-category-cache-${slug}-${page}-${limit}`;

        const data = await useCache(key);

        if (data) {
            return data;
        }


        const _cate = await CategoryModel.findOne({ slug: slug })


        if (_cate) {
            const result = await BookModel.find({ categories: { $in: _cate._id } }).populate([{
                path: 'author', select: '_id name slug'
            }, {
                path: 'categories', select: '_id name slug'
            }, {
                path: 'chapters', select: '_id'
            }]).skip(offset).limit(limitNumber);;

            // new cache 7 ngay
            await useCache(key, result, { ttl: 604800 })
            return result;
        } else {
            return createError({ status: 404, statusMessage: "Not find book by category slug" });
        }

    } catch (error) {
        throw createError(error)
    }
})