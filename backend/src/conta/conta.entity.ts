import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Conta')
export class Conta {
  @PrimaryGeneratedColumn()
  id_conta: number;

  @Column({ length: 30 })
  nome: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 255 })
  senha: string; // lembre-se: deve armazenar hash

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ length: 14, nullable: true })
  cpf: string;

  @Column({ length: 18, nullable: true })
  cnpj: string; // só usado por instituições

  @Column({ length: 100, nullable: true })
  endereco: string;

  @Column({ length: 50, nullable: true })
  contato_emergencial: string;

  @Column({ type: 'text', nullable: true })
  habilidades: string;

  @Column({
    type: 'enum',
    enum: ['voluntario', 'instituicao'],
  })
  tipo_conta: 'voluntario' | 'instituicao';
}
