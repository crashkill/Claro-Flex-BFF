# Claro Flex México - BFF (Backend For Frontend)

## Descrição do Projeto
O Claro Flex México BFF é a camada central de orquestração projetada para conectar as aplicações client-side (Frontend/Mobile) aos microserviços de backend. Inspirado na robustez do projeto `nestjs-bff`, este sistema implementa o padrão arquitetural Backend For Frontend.

## Como Executar Localmente
O sistema deve ser executado sob estrito monitoramento imperial.
1. Clone o repositório.
2. Configure o arquivo `.env` conectando-se ao **Supabase Imperial Oficial**.
3. Instale as dependências: `npm install`
4. Execute o ambiente de desenvolvimento: `npm run start:dev`

## Estrutura de Pastas Componentizada
```
/src
  /domain          # Entidades e Value Objects
  /application     # Casos de Uso e Orquestração
  /infrastructure  # Conexões Externas, DB e APIs
  /presentation    # Controllers (REST/GraphQL)
/docs              # Documentação Imperial (PRD, ADRs)
```

## Stack Utilizada
- **Core:** NestJS, TypeScript, Express.
- **Data:** Supabase (PostgreSQL).
- **Segurança:** Autenticação JWT estrita e RBAC.
- **Deploy:** Coolify.

## Roadmap Inicial
- [x] PRD e README criados (Ordem estabelecida).
- [x] Protótipo Navegável / Configuração Base NestJS (Fase 1).
- [x] Conexão com Supabase Imperial e variáveis de ambiente (Fase 2).
- [x] Módulos Core: Auth, Cache, Logger (Fase 3).
- [x] Integração de APIs e Endpoints BFF (Fase 4).
- [ ] Deploy monitorado via Coolify.

## CI/CD, Testes e Cobertura
- **Status da Build:** `[Pendente]`
- **Cobertura de Testes:** `[Mínimo 80% exigido]`
- **Segurança (Snyk/SonarQube):** `[Ativo]`
