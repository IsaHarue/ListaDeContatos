"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// filepath: backend/database.ts
const typeorm_1 = require("typeorm");
const contato_entity_1 = require("./entities/contato.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'IsaHarue2006',
    database: 'lista_de_contatos',
    entities: [contato_entity_1.Contato],
    synchronize: true, // Sincroniza automaticamente as tabelas (não recomendado em produção)
});
exports.AppDataSource.initialize()
    .then(() => console.log('Conectado ao banco de dados!'))
    .catch((error) => console.error('Erro ao conectar ao banco de dados:', error));
