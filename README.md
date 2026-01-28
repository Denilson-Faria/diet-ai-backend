# 🥗 Diet AI — Backend

O **Diet AI** é um backend responsável por gerar **planos alimentares personalizados utilizando Inteligência Artificial**.

Este serviço atua como o núcleo da aplicação, recebendo dados do usuário, processando regras nutricionais e retornando sugestões de dieta de forma estruturada e escalável.

---

## 🎯 Propósito do Projeto

O objetivo do Diet AI é facilitar a criação de planos alimentares personalizados, considerando:

- Preferências alimentares
- Objetivos do usuário (ex: emagrecimento, ganho de massa)
- Restrições e regras nutricionais
- Geração automatizada via IA

O backend foi projetado para ser **independente de frontend**, podendo atender aplicações web, mobile ou integrações futuras.

---

## 🧠 Inteligência Artificial

A geração dos planos alimentares é feita por meio de **modelos de linguagem**, que recebem instruções estruturadas e retornam respostas padronizadas, prontas para consumo pela aplicação cliente.

O backend atua como:
- Camada de validação
- Camada de segurança da API de IA
- Padronização de respostas
- Controle de rotas e regras de negócio

---

## 🏗️ Arquitetura

- API REST
- Estrutura modular por rotas
- Separação clara entre servidor e regras de domínio
- Pronto para deploy em ambientes cloud

Fluxo simplificado:

Cliente → Backend (Fastify) → IA → Backend → Cliente

---

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **@fastify/cors**
- **OpenAI API**

A escolha do Fastify foi feita visando **performance, baixo overhead e facilidade de escalabilidade**.

---

## 🌐 Endpoints Principais

### Health Check

GET /teste

Usado para validação de funcionamento da API em produção.

### Geração de Plano Alimentar

Endpoints responsáveis por receber dados do usuário e retornar um plano alimentar estruturado.

> Detalhes da lógica estão concentrados nas rotas de `plan`.

---

## 🔐 Segurança

- Variáveis sensíveis são mantidas fora do repositório
- Uso de `.env` ignorado pelo Git
- Backend preparado para ambientes de produção

---

## 🚀 Status do Projeto

🟢 Em desenvolvimento ativo  
🔜 Próximos passos:
- Deploy em ambiente cloud
- Versionamento da API
- Documentação formal dos endpoints
- Autenticação de usuários

---

## 👤 Autor

Denilson Faria  
Backend Developer  

GitHub: https://github.com/Denilson-Faria
