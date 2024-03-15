import { StatusCodes } from "http-status-codes";



export class UnauthorizedException extends Error {
    statusCode: number = StatusCodes.UNAUTHORIZED
    data: any[] | null;
    constructor(message: string, data: any[] | null = null) {
        super(message);
        this.name = this.constructor.name;
        this.data = data
    }
}

export class ServerErrorException extends Error {

    statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
    data: any[] | null;

    constructor(message: string, data: any[] | null = null) {
        super(message);
        this.name = this.constructor.name;
        this.data = data
    }
}


export class NotFoundException extends Error {
    statusCode: number = StatusCodes.NOT_FOUND
    data: any[] | null;

    constructor(message: string, data: any[] | null = null) {
        super(message);
        this.name = this.constructor.name;
        this.data = data
    }
}


export class BadRequestException extends Error {
    statusCode: number = StatusCodes.BAD_REQUEST
    data: any[] | null;
    constructor(message: string, data: any[] | null = null) {
        super(message)
        this.name = this.constructor.name
        this.data = data
    }
}




export class CredentialException extends Error {
    statusCode: number = StatusCodes.UNAUTHORIZED
    data: any[] | null;
    constructor(message: string, data: any[] | null = null) {
        super(message)
        this.name = this.constructor.name
        this.data = data
    }
}