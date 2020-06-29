import { Router } from 'express';

const rotaCaixa = Router();

rotaCaixa.get('/', (request, response) => response.json({ mensagem: 'Rota Caixa' }));

export default rotaCaixa;
