import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { AppErrorCode } from '../constants/error-codes.js';
import { ApiResponse } from '../interfaces/api-response.interface.js';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error occurred';
    let errorCode: AppErrorCode = AppErrorCode.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
      } else if (typeof res === 'object' && res !== null) {
        const resObj = res as Record<string, any>;
        message = resObj.message || message;
        errorCode = resObj.errorCode || this.mapStatusToErrorCode(status);
      }
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    const errorResponse: ApiResponse<null> = {
      success: false,
      statusCode: status,
      errorCode,
      message,
      timestamp: new Date().toISOString(),
    };

    response.status(status).json(errorResponse);
  }

  private mapStatusToErrorCode(status: number): AppErrorCode {
    switch (status) {
      case HttpStatus.BAD_REQUEST:
        return AppErrorCode.BAD_REQUEST;
      case HttpStatus.UNAUTHORIZED:
        return AppErrorCode.UNAUTHORIZED;
      case HttpStatus.NOT_FOUND:
        return AppErrorCode.NOT_FOUND;
      default:
        return AppErrorCode.INTERNAL_SERVER_ERROR;
    }
  }
}
