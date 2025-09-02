import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscricao } from './inscricao.entity';
import { Vaga } from '../vaga/vaga.entity';
import { Conta } from '../conta/conta.entity'; // IMPORTANTE
import { InscricaoService } from './inscricao.service';
import { InscricaoController } from './inscricao.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Inscricao, Vaga, Conta]), // ADICIONE Conta aqui
  ],
  providers: [InscricaoService],
  controllers: [InscricaoController],
})
export class InscricaoModule {}
