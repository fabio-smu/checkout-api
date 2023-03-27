import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoInvestimentoDto } from './create-pedido-investimento.dto';

export class UpdatePedidoInvestimentoDto extends PartialType(CreatePedidoInvestimentoDto) {}
