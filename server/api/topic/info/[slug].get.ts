

import { TopicModel, BookModel } from "../../../models"
export default defineEventHandler(async (event) => {
    try {

        const slug = await getRouterParam(event, 'slug');
        const _topic = await TopicModel.findOne({ slug: slug });
        if (!_topic) {
            throw createError({ statusCode: 500, statusMessage: "không tìm thấy chủ đề" });
        }
        return _topic;
    } catch (error) {
        throw createError(error)
    }
})