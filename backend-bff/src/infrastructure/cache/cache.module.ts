import { Module, Global } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

@Global()
@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 60000, // 60 segundos por padrão
    }),
  ],
  exports: [CacheModule],
})
export class AppCacheModule {}
