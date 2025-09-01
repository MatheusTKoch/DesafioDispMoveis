import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { Vaga } from './vaga.entity';

@Controller('vagas')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Get('instituicao/:id')
    async listarVagas(@Param('id') idInstituicao: string) {
    const id = parseInt(idInstituicao, 10);
    return this.vagaService.listarPorInstituicao(id);
  }

  @Get('instituicao/:id/inscricoes')
    async listarVagasComInscricoes(@Param('id', ParseIntPipe) idInstituicao: number) {
    return this.vagaService.listarVagasComInscricoes(idInstituicao);
  }

  @Get('abertas')
    async listarVagasAbertas() {
  return this.vagaService.listarVagasAbertas();
  }

 @Post('cria-vaga/:id')
  async create(
    @Param('id', ParseIntPipe) idInstituicao: number,
    @Body() createVagaDto: CreateVagaDto,
  ): Promise<Vaga> {
    return await this.vagaService.create(createVagaDto, idInstituicao);
  }

  @Get('candidatadas/:id')
  async listarVagasCandidatadas(@Param('id', ParseIntPipe) idVoluntario: number) {
    return this.vagaService.listarVagasCandidatadas(idVoluntario);
  }


}
