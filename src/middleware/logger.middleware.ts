import { RequestServices } from './../request.service';
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(LoggerMiddleware.name);

  constructor(private readonly requestServices: RequestServices) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log('Middleware is runing...');
    this.requestServices.log();
    next();
  }
}
