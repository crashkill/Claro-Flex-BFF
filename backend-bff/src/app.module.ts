import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseModule } from './infrastructure/database/supabase.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { AppCacheModule } from './infrastructure/cache/cache.module';
import { AuthModule } from './application/auth/auth.module';
import { BffModule } from './application/bff/bff.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SupabaseModule,
    LoggerModule,
    AppCacheModule,
    AuthModule,
    BffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
