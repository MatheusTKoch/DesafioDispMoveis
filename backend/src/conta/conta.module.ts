// conta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from './conta.entity';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conta]),
    JwtModule.register({
      secret: 'projeto_disp_moveis',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [ContaService],
  controllers: [ContaController],
  exports: [ContaService],
})
export class ContaModule {}
