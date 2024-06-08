

import { TopicModel } from "../../models"
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
            sort: {
                "createdAt": "desc"
            },
            lean: true,
            offset: offset,
            limit: limit,
        };

        return await TopicModel.paginate({
            $and: _condition
        }, options);

    } catch (error) {
        throw  createError(error)
    }
})