/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conta } from './conta.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TipoConta, CreateInstituicaoDto } from './dto/create-instituicao.dto';
import { CreateContaDto } from './dto/create-conta.dto';
import sendMailCreateInstitution from '../utils/mail/template/mailContaInstituicao';
import sendMailCreateVolunteer from '../utils/mail/template/mailContaVoluntario';

@Injectable()
export class ContaService {
  constructor(
    @InjectRepository(Conta)
    private contaRepository: Repository<Conta>,
    private jwtService: JwtService,
  ) {}

  async createVoluntario(dto: CreateContaDto): Promise<Conta> {
    const hashedPassword = await bcrypt.hash(dto.senha, 10);
    const conta = this.contaRepository.create({
      ...dto,
      senha: hashedPassword,
      cnpj: undefined, // força null no caso de voluntário
      tipo_conta: 'voluntario',
    });

    const savedConta = await this.contaRepository.save(conta);

    await sendMailCreateVolunteer(savedConta.email, savedConta.nome);

    return savedConta;
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

    const savedConta = await this.contaRepository.save(conta);

    await sendMailCreateInstitution(savedConta.email, savedConta.nome);

    return savedConta;
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

    //Token JWT
    const payload = {
      sub: conta.id_conta,
      tipo_conta: conta.tipo_conta,
      email: conta.email,
      nome: conta.nome,
    };
    const token = this.jwtService.sign(payload);

    return {
      token,
      tipo_conta: conta.tipo_conta,
      id_conta: conta.id_conta,
      nome: conta.nome,
    };
  }
}
