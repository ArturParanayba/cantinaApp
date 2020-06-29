import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import Usuario from '../models/Usuario';

interface Request {
  email: string;
  senha: string;
}

interface Response {
  usuario: Usuario;
  token: string;
}

class AutenticarUsuarioService {
  public async autenticar({ email, senha }: Request): Promise<Response> {
    const repositorioUsuario = getRepository(Usuario);

    const usuario = await repositorioUsuario.findOne({ where: { email } });

    if (!usuario) {
      throw new Error('Senha ou email incorretos');
    }

    const comparaSenha = await compare(senha, usuario.senha);

    if (!comparaSenha) {
      throw new Error('Senha ou email incorretos');
    }

    const token = sign({}, '4c07bd2a577a89bba4b13d6eeb8237ac', {
      subject: usuario.id,
      expiresIn: '1d',
    });
    return { usuario, token };
  }
}

export default AutenticarUsuarioService;
