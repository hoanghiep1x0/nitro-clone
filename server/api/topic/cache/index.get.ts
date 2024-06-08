

import { TopicModel } from "../../../models"
export default defineEventHandler(async (event) => {
    try {

        const query = getQuery(event);

        // validate
        await pagination(query);

        const { page, limit, search, sort } = query;
        const pageNumber = page ?? 1;
        const limitNumber = limit ?? 12;
        const offset = (Number(pageNumber) - 1) * Number(limitNumber);

        const key = "home-topic-fetch-data-cache";

        const data = await useCache(key);

        if (data) {
            return data;
        }

        const result = await TopicModel.find({}).skip(offset).limit(limitNumber);;
        // new cache
        if (result) {
            // new cache 7 ngay
            await useCache(key, result, {ttl: 604800})
        }

        return result;

    } catch (error) {
        throw createError(error)
    }
})