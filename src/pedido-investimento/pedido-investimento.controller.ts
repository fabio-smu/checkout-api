import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoInvestimentoService } from './pedido-investimento.service';
import { CreatePedidoInvestimentoDto } from './dto/create-pedido-investimento.dto';
import { UpdatePedidoInvestimentoDto } from './dto/update-pedido-investimento.dto';

@Controller('pedido-investimento')
export class PedidoInvestimentoController {
  constructor(private readonly pedidoInvestimentoService: PedidoInvestimentoService) {}

  @Post()
  create(@Body() createPedidoInvestimentoDto: CreatePedidoInvestimentoDto) {
    return this.pedidoInvestimentoService.create(createPedidoInvestimentoDto);
  }

  @Get()
  findAll() {
    return this.pedidoInvestimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoInvestimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoInvestimentoDto: UpdatePedidoInvestimentoDto) {
    return this.pedidoInvestimentoService.update(+id, updatePedidoInvestimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoInvestimentoService.remove(+id);
  }
}
