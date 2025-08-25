import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vaga } from '../vaga/vaga.entity';
import { Conta } from '../conta/conta.entity';

export enum StatusInscricao {
  PENDENTE = 'pendente',
  APROVADO = 'aprovado',
  REJEITADO = 'rejeitado',
  CANCELADO = 'cancelado',
}

@Entity('inscricao')
export class Inscricao {
  @PrimaryGeneratedColumn({ name: 'id_inscricao' })
  id: number;

  @Column({ type: 'enum', enum: StatusInscricao, name: 'status_inscricao' })
  statusInscricao: StatusInscricao;

  @Column({ type: 'int', name: 'fk_Vaga_id_vaga' })
  vagaId: number;

  @Column({ type: 'int', name: 'fk_Conta_id_conta' })
  contaId: number;

  @ManyToOne(() => Vaga)
  @JoinColumn({ name: 'fk_Vaga_id_vaga' })
  vaga: Vaga;

  @ManyToOne(() => Conta)
  @JoinColumn({ name: 'fk_Conta_id_conta' })
  conta: Conta;
}
