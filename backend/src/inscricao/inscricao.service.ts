// inscricao.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Inscricao, StatusInscricao } from './inscricao.entity';
import { Vaga, StatusVaga } from '../vaga/vaga.entity';
import sendMailCandidate from '../utils/mail/template/mailVoluntarioVaga';
import sendMailInstitution from '../utils/mail/template/maiInstituicaoVaga';
import { Conta } from '../conta/conta.entity';

@Injectable()
export class InscricaoService {
  constructor(
    @InjectRepository(Inscricao)
    private inscricaoRepository: Repository<Inscricao>,
    @InjectRepository(Vaga)
    private vagaRepository: Repository<Vaga>,
    @InjectRepository(Conta)
    private contaRepository: Repository<Conta>,
    private dataSource: DataSource,
  ) {}

  async inscreverVoluntario(idVaga: number, idVoluntario: number) {
    return await this.dataSource.transaction(async manager => {
      const vaga = await manager.findOne(Vaga, { where: { id: idVaga } });

      if (!vaga) throw new BadRequestException('Vaga não encontrada');
      if (vaga.statusVaga !== StatusVaga.ABERTA || vaga.qtdVagas <= 0) {
        throw new BadRequestException('Vaga não disponível');
      }

      // Cria inscrição
      const inscricao = manager.create(Inscricao, {
        vagaId: idVaga,
        contaId: idVoluntario,
        statusInscricao: StatusInscricao.PENDENTE,
      });
      await manager.save(Inscricao, inscricao);

      // Atualiza vaga
      vaga.qtdVagas -= 1;
      if (vaga.qtdVagas === 0) {
        vaga.statusVaga = StatusVaga.ENCERRADA;
      }
      await manager.save(Vaga, vaga);

      // Buscar dados do voluntário e instituição
      const voluntario = await this.contaRepository.findOne({ where: { id_conta: idVoluntario } });
      const instituicao = await this.contaRepository.findOne({ where: { id_conta: vaga.instituicaoId } });

      // Enviar email para voluntário
      if (voluntario && instituicao) {
        await sendMailCandidate(
          voluntario.email,
          voluntario.nome,
          vaga.titulo,
          instituicao.nome
        );

        // Enviar email para instituição
        await sendMailInstitution(
          instituicao.email,
          voluntario.nome,
          vaga.titulo,
          instituicao.nome
        );
      }

      return inscricao;
    });
  }
}
