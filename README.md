# 🎬 Projeto Filmes

Aplicação fullstack para cadastro e listagem de filmes, com **Angular + .NET 8 + MySQL**, totalmente dockerizada e com CI/CD no GitHub Actions.

---

## 🚀 Tecnologias

- 🔧 Backend: .NET 8 (ASP.NET Core)
- 🎨 Frontend: Angular 17 (SPA)
- 🐬 Banco de Dados: MySQL 8
- 🐳 Docker & Docker Compose
- 🧪 Swagger (documentação da API)
- ⚙️ CI/CD: GitHub Actions + Docker Hub

---

## 🐙 Status do build

![CI/CD](https://github.com/RenanMunizDev/projeto-filmes/actions/workflows/ci-cd.yml/badge.svg)

---

## 🧪 Executar local com Docker

### Pré-requisitos

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados

### Rodar o projeto:

```bash
git clone https://github.com/RenanMunizDev/projeto-filmes.git
cd projeto-filmes
docker-compose up --build
```

### Acessar os serviços:

| Serviço     | URL                      |
|-------------|--------------------------|
| Frontend    | http://localhost:4200    |
| API (.NET)  | http://localhost:5000    |
| Swagger     | http://localhost:5000/swagger |
| MySQL       | localhost:3308 (usuário: root / senha: root) |

---

## 📦 Docker Hub

Imagens atualizadas automaticamente via CI/CD:

- 📁 API: [`renanmunizdev/filmes-api`](https://hub.docker.com/r/renanmunizdev/filmes-api)
- 🎨 Frontend: [`renanmunizdev/filmes-front`](https://hub.docker.com/r/renanmunizdev/filmes-front)

---

## 📬 Exemplo de POST (cadastro de filme)

```json
{
  "titulo": "Matrix",
  "genero": "Ficção Científica",
  "duracao": 136
}
```

---

## 📁 Estrutura do Projeto

```
projeto-filmes/
│
├── FilmesApi/            # Projeto .NET (API RESTful)
├── filmes-front/         # Projeto Angular
├── docker-compose.yml    # Orquestra os 3 containers (API + Front + MySQL)
└── .github/workflows/    # CI/CD GitHub Actions
```

---

## 📌 Autor

Desenvolvido por **Renan Muniz**  
🔗 [LinkedIn](https://www.linkedin.com/in/renanmunizdev)  
🐙 [GitHub](https://github.com/RenanMunizDev)