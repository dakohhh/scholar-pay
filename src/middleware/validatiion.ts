import express from 'express'
import Joi from 'joi';


export const validateRequestBody = (schema:Joi.Schema) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};