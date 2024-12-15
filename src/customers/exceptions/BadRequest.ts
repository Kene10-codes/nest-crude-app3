import { HttpException, HttpStatus } from "@nestjs/common";

export class BadRequestException extends HttpException {
    constructor(msg?:string, status?: HttpStatus) {
        super(msg || "Bad Request", status || HttpStatus.BAD_REQUEST )
    }
}