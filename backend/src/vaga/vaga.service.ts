import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vaga, StatusVaga  } from './vaga.entity';
import { Inscricao } from '../inscricao/inscricao.entity';
import { CreateVagaDto } from './dto/create-vaga.dto';


@Injectable()
export class VagaService {
  constructor(
    @InjectRepository(Vaga)
    private readonly vagaRepository: Repository<Vaga>,

     @InjectRepository(Inscricao)
     private readonly inscricaoRepository: Repository<Inscricao>,
  ) {}

  // Lista todas as vagas de uma instituição
  async listarPorInstituicao(idInstituicao: number): Promise<Vaga[]> {
    return this.vagaRepository.find({
      where: { instituicaoId: idInstituicao },
      order: { dataEntrega: 'DESC' }, // opcional: ordena da mais recente
    });
  }

  async listarVagasComInscricoes(idInstituicao: number) {
  const vagas = await this.vagaRepository.find({
    where: { instituicaoId: idInstituicao },
    order: { dataEntrega: 'DESC' },
  });

  for (const vaga of vagas) {
    const inscricoes = await this.inscricaoRepository.find({
      where: { vagaId: vaga.id },
      relations: ['conta'],
    });

    vaga['voluntarios'] = inscricoes.map(insc => ({
      nome: insc.conta.nome,
      email: insc.conta.email,
      telefone: insc.conta.telefone,
      status: insc.statusInscricao,
    }));
  }

  return vagas;
 }

 async create(createVagaDto: CreateVagaDto, instituicaoId: number): Promise<Vaga> {
    const vaga = this.vagaRepository.create({
      titulo: createVagaDto.titulo,
      descricao: createVagaDto.descricao,
      habilidades: createVagaDto.habilidades,
      localizacao: createVagaDto.localizacao,
      qtdVagas: createVagaDto.qtd_vagas,       // mapeamento manual
      dataEntrega: createVagaDto.data_entrega, // mapeamento manual
      statusVaga: createVagaDto.status_vaga as StatusVaga, // enum
      instituicaoId, // vincula a vaga à instituição
    });

    return await this.vagaRepository.save(vaga);
  }

   async listarVagasAbertas() {
    return this.vagaRepository.find({
      where: { statusVaga: StatusVaga.ABERTA },
    });
  }

}
