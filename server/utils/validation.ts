import Joi from 'joi';
import JoiObject from 'joi-objectid'

Joi.objectId = JoiObject(Joi);

export async function pagination(payload: any) {

    const schema = Joi.object({
        page: Joi.number().min(1).max(10000000).required(),

        limit: Joi.number().min(1).max(10000000).required(),

        search: Joi.string().allow(null, ''),

        sort: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]$')),
    })


    return schema.validateAsync(payload);
}


export async function accountBalance(payload: any) {
    const schema = Joi.object({
        uid: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]$')).required(),
        balance: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]$')).required(),
    })


    return schema.validateAsync(payload);
}

export async function valID(payload: any, field = 'id') {
    let obj = {};
    obj[field] = Joi.objectId().required();
    const schema = Joi.object(obj);

    return schema.validateAsync(payload);
}

export async function userReply(payload: any) {
    const schema = Joi.object({
        uid: Joi.objectId().required(),
        content: Joi.string().required(),
    })


    return schema.validateAsync(payload);
}

