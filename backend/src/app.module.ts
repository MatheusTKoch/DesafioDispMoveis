import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaModule } from './conta/conta.module';
import { VagaModule } from './vaga/vaga.module';
import { InscricaoModule } from './inscricao/inscricao.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { LoginController } from './login/login.controller';

@Module({
  imports: [ContaModule, VagaModule, InscricaoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'desafio',
      autoLoadEntities: true,
      synchronize: false, // cuidado: true recria tabelas, só usar em teste
    }),
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
