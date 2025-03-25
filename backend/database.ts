// filepath: backend/database.ts
import { DataSource } from 'typeorm';
import { Contato } from './entities/contato.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'IsaHarue2006',
  database: 'lista_de_contatos',
  entities: [Contato],
  synchronize: true, // Sincroniza automaticamente as tabelas (não recomendado em produção)
});

AppDataSource.initialize()
  .then(() => console.log('Conectado ao banco de dados!'))
  .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));