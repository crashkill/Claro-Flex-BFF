import { Injectable, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { SupabaseService } from '../../infrastructure/database/supabase.service';
import { LoggerService } from '../../infrastructure/logger/logger.service';

@Injectable()
export class BffService {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly logger: LoggerService,
  ) {}

  async getAggregatedData() {
    this.logger.customLog('Buscando dados agregados no BFF...');
    // Simulação de orquestração: busca dados do Supabase ou outras APIs
    const client = this.supabaseService.getClient();
    
    // O cache-manager cuida do cacheamento automático a nível de controller
    // mas também podemos injetar a base de cache diretamente aqui se necessário.
    
    return {
      message: 'Dados agregados com sucesso pelo BFF Imperial',
      timestamp: new Date().toISOString(),
      status: 'Operacional',
    };
  }
}
