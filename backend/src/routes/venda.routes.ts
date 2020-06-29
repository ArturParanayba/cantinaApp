import { Router } from 'express';

const rotaVenda = Router();

rotaVenda.get('/', (request, response) => response.json({ mensagem: 'Rota Venda' }));

export default rotaVenda;
