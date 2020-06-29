// import { isValidCnpj } from '@brazilian-utils/is-valid-cnpj';
import { EntityRepository, Repository } from 'typeorm';

import Nucleo from '../models/Nucleo';

// CRUD E ENVIO DE DADOS PARA O BANCO

@EntityRepository(Nucleo)
class NucleoRepository extends Repository<Nucleo> {
  // VERIFICA SE CNPJ EXISTE
  public async buscarPorCnpj(cnpj: string): Promise<Nucleo | null> {
    const cnpjAConsultar = await this.findOne({ where: { cnpj } });

    return cnpjAConsultar || null;
  }
}

export default NucleoRepository;
