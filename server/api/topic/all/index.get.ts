

import { TopicModel } from "../../../models"
export default defineEventHandler(async (event) => {
    try {
        const key = "topic-fetch-all";
        const data = await useCache(key);
        if (data) {
            return data;
        }
        const result = await TopicModel.find({});
        if (result) {
            // new cache 7 ngay
            await useCache(key, result, {ttl: 604800})
        }
        return result;
    } catch (error) {
        throw createError(error)
    }
})