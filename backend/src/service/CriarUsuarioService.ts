import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Usuario from '../models/Usuario';

interface Request {
  nome: string;
  email: string;
  senha: string;
  saldo: number;
  cnpjNucleo: string;
}

class CriarUsuarioService {
  public async executar({
    nome,
    email,
    senha,
    saldo,
    cnpjNucleo,
  }: Request): Promise<Usuario> {
    const usuarioRepository = getRepository(Usuario);

    // VALIDAÇÃO DE EMAIL
    const verificaSeUsuarioExiste = await usuarioRepository.findOne({
      where: { email },
    });

    if (verificaSeUsuarioExiste) {
      throw new Error('Email já cadastrado');
    }
    const hashDeSenha = await hash(senha, 8);

    const usuario = usuarioRepository.create({
      nome,
      email,
      senha: hashDeSenha,
      saldo,
      cnpjNucleo,
    });

    await usuarioRepository.save(usuario);

    return usuario;
  }
}

export default CriarUsuarioService;
