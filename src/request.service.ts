import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RequestServices {
  private logger = new Logger(RequestServices.name);

  log() {
    this.logger.log(`${RequestServices.name} is executing`);
  }
}
