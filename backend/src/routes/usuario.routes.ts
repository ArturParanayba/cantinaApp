import { Router } from 'express';
import { getRepository } from 'typeorm';

import Usuario from '../models/Usuario';
import CriarUsuarioService from '../service/CriarUsuarioService';

const rotaUsuario = Router();

rotaUsuario.get('/', async (request, response) => {
  const usuarioRepository = getRepository(Usuario);
  const usuarios = await usuarioRepository.find();

  return response.json(usuarios);
});

rotaUsuario.post('/', async (request, response) => {
  try {
    const { nome, email, senha, saldo, cnpjNucleo } = request.body;
    const criarUsuario = new CriarUsuarioService();

    const usuario = await criarUsuario.executar({
      nome,
      email,
      senha,
      saldo,
      cnpjNucleo,
    });

    delete usuario.senha;

    return response.json(usuario);
  } catch (err) {
    return response.status(400).json({ mensagem: err.message });
  }
});

export default rotaUsuario;
