# ADR-001: Adoção do NestJS para o Backend For Frontend (BFF)

## Status
Aceito e Implementado

## Contexto
O Claro Flex México necessita de uma camada orquestradora (BFF) capaz de unificar as chamadas de API, gerenciar sessões, cache e impor regras de segurança rígidas. A solução deve suportar as diretrizes estritas do Império.

## Decisão
Foi adotado o framework **NestJS** (v11) com TypeScript. 

## Consequências
- **Positivas:** 
  - Estrutura fortemente tipada (TypeScript) inibe erros ingênuos.
  - Arquitetura modular e Injeção de Dependência nativas forçam a adoção do Domain-Driven Design (DDD).
  - Ecossistema maduro para integração de Cache, Auth (Passport) e Microserviços.
- **Negativas:** 
  - Curva de aprendizado inicial mais acentuada em comparação a um Express.js puro.
  - Maior verbosidade.

## Parecer Imperial
"O controle absoluto requer regras absolutas. O NestJS provê a disciplina estrutural necessária para evitar a rebelião do código espaguete."
