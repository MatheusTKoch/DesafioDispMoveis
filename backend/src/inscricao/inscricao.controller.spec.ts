import { Test, TestingModule } from '@nestjs/testing';
import { InscricaoController } from './inscricao.controller';

describe('InscricaoController', () => {
  let controller: InscricaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InscricaoController],
    }).compile();

    controller = module.get<InscricaoController>(InscricaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
