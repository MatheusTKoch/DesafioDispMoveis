// conta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';
import { Conta } from './conta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conta])], // <- importante
  controllers: [ContaController],
  providers: [ContaService],
})
export class ContaModule {}
