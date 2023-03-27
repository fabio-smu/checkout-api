import { Test, TestingModule } from '@nestjs/testing';
import { PedidoInvestimentoController } from './pedido-investimento.controller';
import { PedidoInvestimentoService } from './pedido-investimento.service';

describe('PedidoInvestimentoController', () => {
  let controller: PedidoInvestimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoInvestimentoController],
      providers: [PedidoInvestimentoService],
    }).compile();

    controller = module.get<PedidoInvestimentoController>(PedidoInvestimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
