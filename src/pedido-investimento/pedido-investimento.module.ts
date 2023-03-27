import { Module } from '@nestjs/common';
import { PedidoInvestimentoService } from './pedido-investimento.service';
import { PedidoInvestimentoController } from './pedido-investimento.controller';

@Module({
  controllers: [PedidoInvestimentoController],
  providers: [PedidoInvestimentoService]
})
export class PedidoInvestimentoModule {}
