

import { CategoryModel, BookModel } from '../../../models'
export default defineEventHandler(async (event) => {
    try {

        const key = `category-list-all`;

        const data = await useCache(key);

        if (data) {
            return data;
        }

        const result = await CategoryModel.find({  })

        if (result) {
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