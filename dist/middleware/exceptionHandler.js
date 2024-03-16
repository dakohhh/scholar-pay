"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../helpers/exceptions");
exports.default = (err, req, res, next) => {
    if (err instanceof exceptions_1.UnauthorizedException ||
        err instanceof exceptions_1.ServerErrorException ||
        err instanceof exceptions_1.BadRequestException ||
        err instanceof exceptions_1.NotFoundException) {
        res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message,
            success: false,
        });
    }
    else {
        // Handle other types of errors
        res.status(500).json({
            status: 500,
            message: err.message,
            success: false,
        });
    }
};
//# sourceMappingURL=exceptionHandler.js.map