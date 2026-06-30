# Project Requirements Document (PRD) - Claro Flex México BFF

## Visão Geral e Problema
O objetivo é construir um Backend For Frontend (BFF) para a aplicação Claro Flex México, atuando como orquestrador e intermediário entre o frontend e os microserviços/APIs de backend. Este BFF será inspirado na arquitetura sólida do `nestjs-bff`, garantindo tipagem forte, segurança e alta performance sob a jurisdição do Império.

## Público-Alvo
- Aplicações client-side (Frontend Web/Mobile) do Claro Flex México que consumirão os dados orquestrados.

## Funcionalidades Principais
- Autenticação e Autorização JWT (in-the-box).
- Orquestração e agregação de chamadas para APIs de terceiros.
- Sistema de Cache flexível para otimização de performance.
- Logging centralizado e auditoria (Winston/Console).

## Fluxo de Usuário
1. O Client autentica-se através do BFF.
2. O BFF gerencia e valida os tokens (Access/Refresh).
3. O Client solicita dados agregados ao BFF.
4. O BFF consulta serviços internos, aplica regras de negócio, filtra dados sensíveis e retorna payloads otimizados para o Client.

## Critérios de Sucesso
- Latência reduzida na comunicação Client-BFF.
- Autenticação impenetrável sem vazamento de dados.
- Arquitetura modular aderente ao padrão DDD (Domain-Driven Design).

## Riscos + Mitigação
- **Risco:** Gargalos de performance no BFF. **Mitigação:** Implementação agressiva de cache e chamadas assíncronas.
- **Risco:** Falhas de segurança. **Mitigação:** Scanners de vulnerabilidade no CI/CD e testes rigorosos.
- **Risco:** Complexidade de infraestrutura. **Mitigação:** Deploy automatizado e monitorado via Coolify.

## Arquitetura de Componentes
- **Controllers/Resolvers:** Exposição dos endpoints REST/GraphQL.
- **Application Services:** Regras de orquestração.
- **Domain:** Entidades e regras de negócio isoladas.
- **Infrastructure:** Integração com banco de dados Supabase e APIs externas.

## Stack Sugerida
- NestJS (Node.js) com TypeScript.
- Supabase (Banco de Dados Imperial Oficial).
- Docker (Containerização).
- Coolify (Infraestrutura e Deploy).

## Roadmap
1. [x] Fase 1: Setup do repositório, CI/CD e PRD/README.
2. [x] Fase 2: Configuração da infraestrutura via Coolify e Supabase.
3. [x] Fase 3: Desenvolvimento de módulos core (Auth, Cache, Logger).
4. [x] Fase 4: Integração de APIs e construção de endpoints.
5. [ ] Fase 5: Deploy via Coolify.
