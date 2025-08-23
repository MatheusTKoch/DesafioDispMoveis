import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateContaDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  senha: string;

  @IsOptional()
  telefone?: string;

  @IsOptional()
  cpf?: string;

  @IsOptional()
  cnpj?: string; // ficará null para voluntário

  @IsOptional()
  endereco?: string;

  @IsOptional()
  contato_emergencial?: string;

  @IsOptional()
  habilidades?: string;

  @IsEnum(['voluntario', 'instituicao'])
  tipo_conta: 'voluntario' | 'instituicao';
}
