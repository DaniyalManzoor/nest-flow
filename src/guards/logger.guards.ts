import { Request } from 'express';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';

import { Role } from 'src/decorator/role.enum';

const validationObject = {
  '1xzye': { role: Role.ADMIN },
  '2xzye': { role: Role.USER },
  '3xzye': { role: Role.USER },
};

@Injectable()
export class AuthGaurd implements CanActivate {
  private logger = new Logger(AuthGaurd.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const handler = context.getHandler().name;
    const className = context.getClass().name;
    const request = ctx.getRequest<Request>();

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [context.getHandler(), context.getClass()]);

    const { ip, path, method } = request;
    this.logger.log(`${AuthGaurd.name} ${method} ${path} ${ip} ${className} ${handler}`);

    if (!requiredRoles) {
      return true;
    }

    const authUserRole = validationObject[request.headers.authorization]?.role;
    return requiredRoles.includes(authUserRole);
  }
}
