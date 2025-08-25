import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VagaController } from './vaga.controller';
import { VagaService } from './vaga.service';
import { Vaga } from './vaga.entity';
import { Inscricao } from 'src/inscricao/inscricao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vaga, Inscricao])],
  controllers: [VagaController],
  providers: [VagaService],
  exports: [VagaService], // exporta caso outro módulo precise
})
export class VagaModule {}
