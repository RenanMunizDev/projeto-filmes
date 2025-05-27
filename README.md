# Projeto Filmes 🎬

Este projeto é composto por uma **API RESTful em .NET 8**, um **frontend em Angular** e um **banco de dados MySQL**, todos dockerizados. Ele permite cadastrar, consultar, atualizar e remover filmes com interface web e documentação Swagger.

---

## 🔧 Tecnologias

* .NET 8 (API)
* Angular 16+ (Frontend)
* MySQL 8 (Banco de dados)
* Docker e Docker Compose
* CI/CD com GitHub Actions
* Swagger para documentação da API

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
docker-compose up --pull always --build
```

### 3. Acessar os serviços

* **Frontend**: [http://localhost:4200](http://localhost:4200)
* **Swagger da API**: [http://localhost:5000/swagger](http://localhost:5000/swagger)

A API será acessada pelo front via Docker interno, e o banco de dados será automaticamente criado e populado ao iniciar o container.

---

## 📦 Imagens no Docker Hub

* API: [`renanmunizdev/filmes-api`](https://hub.docker.com/r/renanmunizdev/filmes-api)
* Frontend: [`renanmunizdev/filmes-front`](https://hub.docker.com/r/renanmunizdev/filmes-front)

---

## 🔎 Testes rápidos via Swagger

Acesse: `http://localhost:5000/swagger`

### Exemplo de corpo para POST `/Filme`

```json
{
  "titulo": "Oppenheimer",
  "genero": "Drama",
  "duracao": 180
}
```

---

## ✨ Autor

[Renan Muniz](https://github.com/RenanMunizDev)

Desenvolvedor .NET apaixonado por boas práticas, performance e entregas de impacto.
