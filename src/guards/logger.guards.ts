import { Observable } from 'rxjs';
import { Request } from 'express';
import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthGaurd implements CanActivate {
  private logger = new Logger(AuthGaurd.name);

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const handler = context.getHandler().name;
    const className = context.getClass().name;
    const request = ctx.getRequest<Request>();

    const { ip, path, method } = request;
    this.logger.log(`${AuthGaurd.name} ${method} ${path} ${ip} ${className} ${handler}`);
    return true;
  }
}
