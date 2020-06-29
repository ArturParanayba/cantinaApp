import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import NucleoRepository from '../repositories/NucleoRepository';
import CriarNucleoService from '../service/CriarNucleoService';

const rotaNucleo = Router();

rotaNucleo.get('/', async (request, response) => {
  const nucleoRepository = getCustomRepository(NucleoRepository);
  const nucleos = await nucleoRepository.find();

  return response.json(nucleos);
});

rotaNucleo.post('/', async (request, response) => {
  try {
    const { cnpj, nome, email } = request.body;
    const criarNucleo = new CriarNucleoService();

    const nucleo = await criarNucleo.executar({ cnpj, nome, email });

    return response.json(nucleo);
  } catch (err) {
    return response.status(400).json({ mensagem: err.message });
  }
});

export default rotaNucleo;
