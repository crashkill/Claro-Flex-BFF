import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name);
  private supabase: SupabaseClient;

  constructor(private readonly configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      this.logger.error('Supabase URL ou Key não foram definidos nas variáveis de ambiente.');
      throw new Error('Supabase Config Missing');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
    this.logger.log('Supabase Client inicializado com sucesso.');
  }

  public getClient(): SupabaseClient {
    return this.supabase;
  }
}
