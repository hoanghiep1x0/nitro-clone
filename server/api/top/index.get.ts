
import { TopModel } from '../../models'
export default defineEventHandler(async (event) => {
    try {

        const query = getQuery(event);

        // validate
        await pagination(query);

        const { page, limit } = query;
        const pageNumber = page ?? 1;
        const limitNumber = limit ?? 12;
        const offset = (Number(pageNumber) - 1) * Number(limitNumber);

        const key = "home-top-fetch-data-cache";

        const data = await useCache(key);

        if (data) {
            return data;
        }

        const result = await TopModel.find({ }).populate([{
            // { path: 'author', select: 'name email' },
            // { path: 'comments', populate: { path: 'author', select: 'name' } }   
            path: 'book',
            populate: [{
                // { path: 'author', select: 'name email' },
                // { path: 'comments', populate: { path: 'author', select: 'name' } }   
                path: 'author', select: '_id name slug'
            }, {
                path: 'categories', select: '_id name slug'
            }, {
                path: 'chapters', select: '_id'
            }]
        }]).skip(offset).limit(limitNumber);;

        if (result) {
            // new cache 7 ngay
            await useCache(key, result, {ttl: 604800})
        }

        return result;

    } catch (error) {
       throw  createError(error)
    }
})