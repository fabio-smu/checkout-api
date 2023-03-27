import { Injectable } from '@nestjs/common';
import { CreatePedidoInvestimentoDto } from './dto/create-pedido-investimento.dto';
import { UpdatePedidoInvestimentoDto } from './dto/update-pedido-investimento.dto';

@Injectable()
export class PedidoInvestimentoService {
  create(createPedidoInvestimentoDto: CreatePedidoInvestimentoDto) {
    return 'This action adds a new pedidoInvestimento';
  }

  findAll() {
    return `This action returns all pedidoInvestimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoInvestimento`;
  }

  update(id: number, updatePedidoInvestimentoDto: UpdatePedidoInvestimentoDto) {
    return `This action updates a #${id} pedidoInvestimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoInvestimento`;
  }
}
