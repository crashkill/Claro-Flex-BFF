import { Injectable, ConsoleLogger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  // Poderá ser estendido para utilizar Winston no futuro
  customLog(message: string) {
    this.log(`[Imperial Log]: ${message}`);
  }
}
