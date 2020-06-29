import { Router } from 'express';

import rotaCaixa from './caixa.routes';
import rotaEstoqueInsumo from './estoqueInsumo.routes';
import rotaEstoqueVenda from './estoqueVenda.routes';
import rotaNucleo from './nucleo.routes';
import rotaUsuario from './usuario.routes';
import rotaVenda from './venda.routes';
import rotaLogin from './login.routes';

const routes = Router();

routes.use('/caixa', rotaCaixa);
routes.use('/estoqueInsumo', rotaEstoqueInsumo);
routes.use('/estoqueVenda', rotaEstoqueVenda);
routes.use('/nucleo', rotaNucleo);
routes.use('/usuario', rotaUsuario);
routes.use('/venda', rotaVenda);
routes.use('/login', rotaLogin);

export default routes;
