import joi from "joi";

export const registerUserSchema = joi.object({
    email: joi.string().email().required(),
    firstname: joi.string().min(3).max(25).required(),
    lastname: joi.string().min(3).max(25).required(),
    password: joi.string().min(6).max(100).required(),
});

export const loginUserSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(100).required(),
});
