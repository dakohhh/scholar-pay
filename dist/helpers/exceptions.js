"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = exports.CredentialException = exports.BadRequestException = exports.NotFoundException = exports.ServerErrorException = exports.UnauthorizedException = void 0;
const http_status_codes_1 = require("http-status-codes");
class UnauthorizedException extends Error {
    constructor(message, data = null) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        this.name = this.constructor.name;
        this.data = data;
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ServerErrorException extends Error {
    constructor(message, data = null) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        this.name = this.constructor.name;
        this.data = data;
    }
}
exports.ServerErrorException = ServerErrorException;
class NotFoundException extends Error {
    constructor(message, data = null) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
        this.name = this.constructor.name;
        this.data = data;
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends Error {
    constructor(message, data = null) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        this.name = this.constructor.name;
        this.data = data;
    }
}
exports.BadRequestException = BadRequestException;
class CredentialException extends Error {
    constructor(message, data = null) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        this.name = this.constructor.name;
        this.data = data;
    }
}
exports.CredentialException = CredentialException;
class ForbiddenException extends Error {
    constructor(message, data = null) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.FORBIDDEN;
        this.name = this.constructor.name;
        this.data = data;
    }
}
exports.ForbiddenException = ForbiddenException;
//# sourceMappingURL=exceptions.js.map