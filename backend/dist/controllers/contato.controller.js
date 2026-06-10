"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirContato = exports.editarContato = exports.listarContatos = exports.criarContato = void 0;
const database_1 = require("../database");
const contato_entity_1 = require("../entities/contato.entity");
// Criar um novo contato
const criarContato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, numero } = req.body;
    const contato = new contato_entity_1.Contato();
    contato.nome = nome;
    contato.numero = numero;
    const contatoRepository = database_1.AppDataSource.getRepository(contato_entity_1.Contato);
    yield contatoRepository.save(contato);
    res.status(201).json(contato);
});
exports.criarContato = criarContato;
// Listar todos os contatos
const listarContatos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contatoRepository = database_1.AppDataSource.getRepository(contato_entity_1.Contato);
    const contatos = yield contatoRepository.find();
    res.json(contatos);
});
exports.listarContatos = listarContatos;
// Editar um contato
const editarContato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nome, numero } = req.body;
    const contatoRepository = database_1.AppDataSource.getRepository(contato_entity_1.Contato);
    const contato = yield contatoRepository.findOneBy({ id: parseInt(id) });
    if (!contato) {
        return res.status(404).json({ message: 'Contato não encontrado' });
    }
    contato.nome = nome;
    contato.numero = numero;
    yield contatoRepository.save(contato);
    res.json(contato);
});
exports.editarContato = editarContato;
// Excluir um contato
const excluirContato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const contatoRepository = database_1.AppDataSource.getRepository(contato_entity_1.Contato);
    yield contatoRepository.delete(id);
    res.status(204).send();
});
exports.excluirContato = excluirContato;
