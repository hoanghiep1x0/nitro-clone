

import { AuthorModel } from '../../../models'
export default defineEventHandler(async (event) => {
    try {
        const slug = await getRouterParam(event, 'slug');
        // validate

        const key = "author-get-info-" + slug;

        const data = await useCache(key);

        if (data) {
            return data;
        }

        const result = await AuthorModel.findOne({ slug: slug });

        if (result) {
            // new cache
            await useCache(key, result, {ttl: 604800})
        }


        return result;

    } catch (error) {
        throw createError(error)
    }
})