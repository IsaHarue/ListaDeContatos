// filepath: backend/controllers/contato.controller.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Contato } from '../entities/contato.entity';

// Criar um novo contato
export const criarContato = async (req: Request, res: Response) => {
  const { nome, numero } = req.body;
  const contato = new Contato();
  contato.nome = nome;
  contato.numero = numero;

  const contatoRepository = AppDataSource.getRepository(Contato);
  await contatoRepository.save(contato);

  res.status(201).json(contato);
};

// Listar todos os contatos
export const listarContatos = async (_req: Request, res: Response) => {
  const contatoRepository = AppDataSource.getRepository(Contato);
  const contatos = await contatoRepository.find();
  res.json(contatos);
};

// Editar um contato
export const editarContato = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, numero } = req.body;

  const contatoRepository = AppDataSource.getRepository(Contato);
  const contato = await contatoRepository.findOneBy({ id: parseInt(id) });

  if (!contato) {
    return res.status(404).json({ message: 'Contato não encontrado' });
  }

  contato.nome = nome;
  contato.numero = numero;
  await contatoRepository.save(contato);

  res.json(contato);
};

// Excluir um contato
export const excluirContato = async (req: Request, res: Response) => {
  const { id } = req.params;

  const contatoRepository = AppDataSource.getRepository(Contato);
  await contatoRepository.delete(id);

  res.status(204).send();
};