import { IsString, IsInt, IsDateString, IsEnum, Min } from 'class-validator';

export class CreateVagaDto {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsString()
  habilidades: string;

  @IsString()
  localizacao: string;

  @IsInt()
  @Min(1)
  qtd_vagas: number;

  @IsDateString()
  data_entrega: string;

  @IsEnum(['aberta', 'encerrada', 'cancelada'])
  status_vaga: 'aberta' | 'encerrada' | 'cancelada';
}
