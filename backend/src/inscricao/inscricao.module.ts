import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';      // <--- IMPORTAR
import { InscricaoController } from './inscricao.controller';
import { InscricaoService } from './inscricao.service';
import { Inscricao } from './inscricao.entity';       // <--- IMPORTAR
import { Vaga } from '../vaga/vaga.entity';          // <--- IMPORTAR

@Module({
  imports: [
    TypeOrmModule.forFeature([Inscricao, Vaga]),    // repositórios disponíveis no módulo
  ],
  controllers: [InscricaoController],
  providers: [InscricaoService]
})
export class InscricaoModule {}
