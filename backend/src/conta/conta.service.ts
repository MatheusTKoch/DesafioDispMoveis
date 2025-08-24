import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conta } from './conta.entity';
import { CreateContaDto } from './dto/create-conta.dto';
import * as bcrypt from 'bcrypt';

import { TipoConta, CreateInstituicaoDto } from './dto/create-instituicao.dto';

@Injectable()
export class ContaService {
  constructor(
    @InjectRepository(Conta)
    private contaRepository: Repository<Conta>,
  ) {}

  async createVoluntario(dto: CreateContaDto): Promise<Conta> {
    const hashedPassword = await bcrypt.hash(dto.senha, 10);
    const conta = this.contaRepository.create({
      ...dto,
      senha: hashedPassword,
      cnpj: undefined, // força null no caso de voluntário
      tipo_conta: 'voluntario',
    });
    return this.contaRepository.save(conta);
  }

  async findAll(): Promise<Conta[]> {
    return this.contaRepository.find();
  }

  async findOne(id: number): Promise<Conta | null> {
    return this.contaRepository.findOne({ where: { id_conta: id } });
  }

  async remove(id: number): Promise<void> {
    await this.contaRepository.delete(id);
  }

  async createInstituicao(dto: CreateInstituicaoDto): Promise<Conta> {
    const hashedPassword = await bcrypt.hash(dto.senha, 10);

    const conta = this.contaRepository.create({
      ...dto,
      senha: hashedPassword,
      tipo_conta: TipoConta.INSTITUICAO, // força o tipo para instituição
    });

    return this.contaRepository.save(conta);
  }

  async login(email: string, senha: string) {
    const conta = await this.contaRepository.findOne({ where: { email } });
    if (!conta) {
      throw new BadRequestException('Usuário não encontrado');
    }

    const isValid = await bcrypt.compare(senha, conta.senha);
    if (!isValid) {
      throw new BadRequestException('Senha incorreta');
    }

    return { tipo_conta: conta.tipo_conta, id_conta: conta.id_conta, nome: conta.nome };
  }
}
