import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { BffService } from '../../application/bff/bff.service';
import { JwtAuthGuard } from '../../application/auth/guards/jwt-auth.guard';

@Controller('api/v1/bff')
@UseInterceptors(CacheInterceptor)
export class BffController {
  constructor(private readonly bffService: BffService) {}

  @Get('dashboard')
  @UseGuards(JwtAuthGuard)
  @CacheKey('dashboard_data')
  @CacheTTL(30000) // 30 segundos de cache
  async getDashboard() {
    return this.bffService.getAggregatedData();
  }
  
  @Get('public-status')
  async getStatus() {
    return { status: 'BFF Imperial Ativo e Monitorando.' };
  }
}
