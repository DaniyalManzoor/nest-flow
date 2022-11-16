import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloSpockSyncer(): string {
    return 'Spock Syncer!';
  }
}
