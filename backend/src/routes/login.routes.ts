import { Router } from 'express';

import AutenticarUsuarioService from '../service/AutenticarUsuarioService';

const rotaLogin = Router();

rotaLogin.post('/', async (request, response) => {
  try {
    const { email, senha } = request.body;

    const autenticarUsuario = new AutenticarUsuarioService();

    const { usuario, token } = await autenticarUsuario.autenticar({
      email,
      senha,
    });

    delete usuario.senha;

    return response.json({ usuario, token });
  } catch (err) {
    return response.status(400).json({ mensagem: err.message });
  }
});

export default rotaLogin;
