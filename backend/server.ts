import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AppDataSource } from './database';
import contatoRoutes from './routes/contato.routes';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api', contatoRoutes);

// Iniciar o servidor
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.error('Erro ao iniciar o servidor:', error));