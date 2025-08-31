import { Controller, Post, Param, ParseIntPipe } from '@nestjs/common';
import { InscricaoService } from './inscricao.service';
import { Inscricao } from './inscricao.entity';

@Controller('inscricoes')
export class InscricaoController {
  constructor(private readonly inscricaoService: InscricaoService) {}

  @Post(':idVaga/:idVoluntario')
  async inscrever(
    @Param('idVaga', ParseIntPipe) idVaga: number,
    @Param('idVoluntario', ParseIntPipe) idVoluntario: number,
  ): Promise<Inscricao> {
    return this.inscricaoService.inscreverVoluntario(idVaga, idVoluntario);
  }
}
