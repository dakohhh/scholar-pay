import express from 'express'
import Joi from 'joi';
import { BadRequestException } from '../helpers/exceptions';

export const validateRequestBody = (schema:Joi.Schema) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            
            return next(new BadRequestException(error.details[0].message));
        }
        next();
    };
};