import { APP_GUARD } from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { RequestServices } from './request.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthGaurd } from './guards/logger.guards';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    RequestServices,
    {
      provide: APP_GUARD,
      useClass: AuthGaurd,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
