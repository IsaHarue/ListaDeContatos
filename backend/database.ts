// filepath: backend/database.ts
import { DataSource } from 'typeorm';
import { Contato } from './entities/contato.entity';

export const AppDataSource = new DataSource({
   type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [Contato],
  synchronize: true, // Sincroniza automaticamente as tabelas
});

AppDataSource.initialize()
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));