import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

export class HttpExceptionsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
           const context = host.switchToHttp()
        //    const request = context.getRequest<Request>()
           const response = context.getResponse<Response>()

           response.send ({
            status:  exception.getStatus(),
            message: exception.getResponse()

           })
    }
}