import express from "express"

import 
{ 
    BadRequestException,
    UnauthorizedException, 
    ServerErrorException, 
    NotFoundException 
} from "../helpers/exceptions";


export default (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err instanceof UnauthorizedException ||
        err instanceof ServerErrorException ||
        err instanceof BadRequestException ||
        err instanceof NotFoundException) {
        res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
            success: false,
        });
    } else {
        // Handle other types of errors
        res.status(500).json({
            status: 500,
            message: err.message,
            success: false,
        });
    }
}

