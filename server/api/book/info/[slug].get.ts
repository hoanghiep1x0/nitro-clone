

import { BookModel } from '../../../models'
export default defineEventHandler(async (event) => {
    try {

        const slug = await getRouterParam(event, 'slug');

        // validate

        const key = "book-get-info-" + slug;

        const data = await useCache(key);

        if (data) {
            return data;
        }

        const result = await BookModel.findOne({ slug: slug }).populate([{
            path: 'author', select: '_id name slug img books'
        }, {
            path: 'categories', select: '_id name slug'
        }, {
            path: 'chapters', select: '_id'

        }]);

        if (result) {
            // new cache
            await useCache(key, result,{ttl:604800})
        }


        return result;

    } catch (error) {
        throw createError(error)
    }
})