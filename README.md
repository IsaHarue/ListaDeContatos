# ListaDeContatos

Uma aplicação web para gerenciar contatos (CRUD completo), desenvolvida com **Angular** no frontend e **Node.js** com **TypeScript** e **PostgreSQL** no backend.

## 🔧 Funcionalidades

- Adicionar, editar, visualizar e excluir contatos
- Validação de formulários
- Máscara para números de telefone
- Ordenação por ordem de criação (ID)
- Consumo de API REST
- Integração backend e frontend

---

## ⚙️Tecnologias Utilizadas

### Frontend

- Angular 19
- HTML/CSS
- TypeScript
- RxJS
- Ngx-mask

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Dotenv
- ts-node

---

## 🧑‍💻 Instalação e Execução Local

### Pré-requisitos

- Node.js
- PostgreSQL
- Angular CLI (`npm install -g @angular/cli`)
- ts-node (`npm install -g ts-node`)
- Git (opcional)

### Passos

1. **Clone o repositório:**
```bash
git clone https://github.com/IsaHarue/ListaDeContatos.git
cd ListaDeContatos
```

2. **Instale as Dependências:**
```bash
npm install
```

3. **Configure o banco de dados:**
Vá até a pasta backend e localize o arquivo database.ts e nee modifique:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=lista_contatos
DB_USER=seu_usuario  //modifique esse
DB_PASSWORD=sua_senha //modifique esse
``` 

4. **inicie o servidor**
```bash
npm start
```
---

## 👨‍💻 Scripts Disponíveis
npm start           # Inicia frontend + backend
npm run build       # Compila o projeto Angular
npm run serve       # Apenas frontend em modo dev
ts-node backend/server.ts  # Inicia apenas backend

---

## 📝 Observações
O projeto está publicado no GitHub Pages agora!!
O projeto encontra-se funcional e atende aos principais objetivos propostos, incluindo o gerenciamento de contatos por meio das operações CRUD. Algumas melhorias e refinamentos visuais ou funcionais ainda estão previstos para versões futuras, como parte do processo contínuo de evolução da aplicação.

Este repositório faz parte do meu portfólio e representa meus conhecimentos práticos em Angular, TypeScript, integração com APIs e desenvolvimento de aplicações web.

---

## Autora
Isabelle Harue 
GitHub


