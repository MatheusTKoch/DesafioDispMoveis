// conta.controller.ts
import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { ContaService } from './conta.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { CreateInstituicaoDto } from './dto/create-instituicao.dto';


@Controller('conta') // <-- define o caminho base
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post('cadastro/voluntario') // <-- define a rota POST /conta/voluntario
  createVoluntario(@Body() createContaDto: CreateContaDto) {
    return this.contaService.createVoluntario(createContaDto);
  }

  @Post('cadastro/instituicao')
  createInstituicao(@Body() createInstituicaoDto: CreateInstituicaoDto) {
   return this.contaService.createInstituicao(createInstituicaoDto);
 }

 @Post('login')
 async login(@Body() body: { email: string; senha: string }) {
   return this.contaService.login(body.email, body.senha);
 }

 @Put('alterar/instituicao/:id')
 async updateInstituicao(@Param('id') id: number, @Body() body: any) {
   return this.contaService.updateInstituicao(id, body);
 }

 @Put('alterar/voluntario/:id')
 async updateVoluntario(@Param('id') id: number, @Body() body: any) {
   return this.contaService.updateVoluntario(id, body);
 }
}
