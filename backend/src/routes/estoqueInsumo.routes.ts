import { Router } from 'express';

const rotaEstoqueInsumo = Router();

rotaEstoqueInsumo.get('/', (request, response) => response.json({ mensagem: 'Rota Estoque de insumos' }));

export default rotaEstoqueInsumo;
