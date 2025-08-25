import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

export enum StatusVaga {
  ABERTA = 'aberta',
  ENCERRADA = 'encerrada',
  CANCELADA = 'cancelada',
}

@Entity('vaga')
export class Vaga {
  @PrimaryGeneratedColumn({ name: 'id_vaga' })
  id: number;

  @Column({ length: 50 })
  titulo: string;

  @Column('text')
  descricao: string;

  @Column('text')
  habilidades: string;

  @Column({ length: 100 })
  localizacao: string;

  @Column({ type: 'int', name: 'qtd_vagas' })
  qtdVagas: number;

  @Column({ type: 'date', name: 'data_entrega' })
  dataEntrega: Date;

 @Column({ type: 'enum', enum: StatusVaga, default: StatusVaga.ABERTA, name: 'status_vaga' })
 statusVaga: StatusVaga;

  @Column({ type: 'int', name: 'fk_Conta_id_conta' })
  instituicaoId: number;
}