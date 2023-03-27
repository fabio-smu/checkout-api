import { Test, TestingModule } from '@nestjs/testing';
import { PedidoInvestimentoService } from './pedido-investimento.service';

describe('PedidoInvestimentoService', () => {
  let service: PedidoInvestimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoInvestimentoService],
    }).compile();

    service = module.get<PedidoInvestimentoService>(PedidoInvestimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
