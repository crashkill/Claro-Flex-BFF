import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { LoggerService } from '../../infrastructure/logger/logger.service';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly logger: LoggerService) {}

  @Post('login')
  async login(@Body() body: any) {
    this.logger.customLog(`Tentativa de acesso pelo usuário: ${body?.username}`);
    
    // Simulação temporária - no mundo real validaríamos credenciais no Supabase
    if (body?.username === 'vader' && body?.password === 'darkside') {
      return {
        access_token: 'fake-imperial-jwt-token-for-testing',
      };
    }
    
    throw new UnauthorizedException('Credenciais rejeitadas pelo Império.');
  }
}
