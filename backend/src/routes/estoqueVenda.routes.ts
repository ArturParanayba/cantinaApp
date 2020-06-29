import { Router } from 'express';

const rotaEstoqueVenda = Router();

rotaEstoqueVenda.get('/', (request, response) => response.json({ mensagem: 'Rota Estoque Venda' }));

export default rotaEstoqueVenda;
