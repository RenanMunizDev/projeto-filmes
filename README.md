# Projeto Filmes 🎬

Este projeto é composto por uma **API RESTful em .NET 8** e um **frontend em Angular**, ambos dockerizados e prontos para produção. A API permite cadastrar, consultar, atualizar e remover filmes com documentação via Swagger.

---

## 🔧 Tecnologias

- .NET 8 (API)
- Angular 16+ (Frontend)
- Docker e Docker Compose
- CI/CD com GitHub Actions
- Swagger para documentação da API

---

## 🐳 Como rodar com Docker

> Requisitos: [Docker](https://www.docker.com/products/docker-desktop/) instalado.

### 1. Clonar o repositório

```bash
git clone https://github.com/RenanMunizDev/projeto-filmes.git
cd projeto-filmes
```

### 2. Rodar com Docker Compose

```bash
docker-compose up --build
```

### 3. Acessar os serviços

- **Frontend**: http://localhost:4200  
- **Swagger da API**: http://localhost:5000/swagger/index.html

---

## 📦 Imagens no Docker Hub

- API: [`renanmunizdev/filmes-api`](https://hub.docker.com/r/renanmunizdev/filmes-api)
- Frontend: [`renanmunizdev/filmes-front`](https://hub.docker.com/r/renanmunizdev/filmes-front)

---

## ✨ Autor

[Renan Muniz](https://github.com/RenanMunizDev)

Desenvolvedor .NET apaixonado por boas práticas, performance e entregas de impacto.
