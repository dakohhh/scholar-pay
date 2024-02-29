import { StatusCodes } from "http-status-codes";



export class UnauthorizedException extends Error {
    statusCode: number = StatusCodes.UNAUTHORIZED
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class ServerErrorException extends Error {

    statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class NotFoundException extends Error {
    statusCode: number = StatusCodes.NOT_FOUND
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;
    }
}


export class BadRequestException extends Error {
    statusCode: number = StatusCodes.BAD_REQUEST
    constructor(message:string){
        super(message)
        this.name = this.constructor.name
    }
}