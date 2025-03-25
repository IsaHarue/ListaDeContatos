import { Router } from 'express';
import {
  criarContato,
  listarContatos,
  editarContato,
  excluirContato,
} from '../controllers/contato.controller';

const router = Router();

router.post('/contatos', criarContato);
router.get('/contatos', listarContatos);
router.put('/contatos/:id', editarContato); 
router.delete('/contatos/:id', excluirContato);

export default router;