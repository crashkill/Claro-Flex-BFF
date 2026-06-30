import { Module } from '@nestjs/common';
import { BffService } from './bff.service';
import { BffController } from '../../presentation/bff/bff.controller';

@Module({
  controllers: [BffController],
  providers: [BffService],
})
export class BffModule {}
