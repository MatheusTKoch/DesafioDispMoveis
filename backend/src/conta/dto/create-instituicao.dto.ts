// create-instituicao.dto.ts
import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';

export enum TipoConta {
  VOLUNTARIO = 'voluntario',
  INSTITUICAO = 'instituicao',
}

export class CreateInstituicaoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsEnum(TipoConta)
  tipo_conta: TipoConta = TipoConta.INSTITUICAO; // valor fixo para instituição
}
