import { isValidCnpj } from '@brazilian-utils/is-valid-cnpj';
import { getCustomRepository } from 'typeorm';
import Nucleo from '../models/Nucleo';
import NucleoRepository from '../repositories/NucleoRepository';

interface Request {
  cnpj: string;
  nome: string;
  email: string;
}

// COLOCAR TODAS AS REGRAS DE NEGOCIO DENTRO DO SERVICE

class CriarNucleoService {
  public async executar({ cnpj, nome, email }: Request): Promise<Nucleo> {
    const nucleoRepository = getCustomRepository(NucleoRepository);

    // VALIDAÇÃO DE CNPJ
    const cnpjAValidar = isValidCnpj(cnpj);

    if (!cnpjAValidar) {
      throw Error('CNPJ invalido');
    }

    // BUSCA DE CNPJ NO BANCO
    const procurarPorCnpj = await nucleoRepository.buscarPorCnpj(cnpj);

    if (procurarPorCnpj) {
      throw Error('CNPJ já cadastrado');
    }

    // criação do registro
    const nucleo = nucleoRepository.create({ cnpj, nome, email });
    // salvamento no banco de dados
    await nucleoRepository.save(nucleo);

    return nucleo || null;
  }
}

export default CriarNucleoService;
