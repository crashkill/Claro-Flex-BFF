# ADR-002: Adoção do Supabase Imperial

## Status
Aceito e Implementado

## Contexto
A aplicação precisa de uma base de dados altamente confiável, segura e performática. O Império possui uma instância self-hosted dedicada e não tolera o uso de serviços externos sem controle direto.

## Decisão
Foi determinada a utilização compulsória do **Supabase Imperial**, hospedado na infraestrutura `fsw-hitss.duckdns.org`.

## Consequências
- **Positivas:**
  - Governança de dados 100% controlada pela infraestrutura interna (via Coolify).
  - Autenticação e Row Level Security (RLS) out-of-the-box.
  - Cliente nativo (`@supabase/supabase-js`) de fácil integração com a infraestrutura do NestJS.
- **Negativas:**
  - Acoplamento ao ecossistema Supabase, porém mitigado pelo uso de repositórios/interfaces (DDD) em nosso projeto.

## Parecer Imperial
"Confiar dados a servidores fora de nosso controle é um ato de traição. O Supabase Imperial é o cofre que garante nossa supremacia."
