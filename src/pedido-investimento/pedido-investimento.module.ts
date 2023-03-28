import { Module } from '@nestjs/common';
import { PedidoInvestimentoService } from './pedido-investimento.service';
import { PedidoInvestimentoController } from './pedido-investimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoInvestimento } from './entities/pedido-investimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoInvestimento])],
  controllers: [PedidoInvestimentoController],
  providers: [PedidoInvestimentoService],
})
export class PedidoInvestimentoModule {}
