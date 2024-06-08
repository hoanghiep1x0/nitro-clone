

import { CategoryModel } from '../../../models'
export default defineEventHandler(async (event) => {
    try {
        const slug = await getRouterParam(event, 'slug');
        // validate
        const key = `home-category-info-${slug}`;
        const data = await useCache(key);
        if (data) {
            return data;
        }
        const _cate = await CategoryModel.findOne({ slug: slug })
        if (_cate) {
            // new cache 7 ngay
            await useCache(key, _cate, { ttl: 604800 })
            return _cate;
        } else {
            return createError({ status: 404, statusMessage: "Not find cate by category slug" });
        }

    } catch (error) {
        throw createError(error)
    }
})