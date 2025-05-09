const joi = require("joi");

const inputSchema = joi.object({
    title:joi.string().required(),
    description:joi.string().required(),
    image:joi.string(),
    startDate:joi.date(),
    endDate:joi.date(),
    price:joi.number().required(),
});

const updateSchema = joi.object({
    title:joi.string(),
    description:joi.string(),
    image:joi.string(),
    startDate:joi.date(),
    endDate:joi.date(),
    price:joi.number(),
});

module.exports = {inputSchema, updateSchema};