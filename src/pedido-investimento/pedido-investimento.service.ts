import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoInvestimentoDto } from './dto/create-pedido-investimento.dto';
import { UpdatePedidoInvestimentoDto } from './dto/update-pedido-investimento.dto';
import { PedidoInvestimento } from './entities/pedido-investimento.entity';

@Injectable()
export class PedidoInvestimentoService {
  constructor(
    @InjectRepository(PedidoInvestimento)
    private pedidoRepository: Repository<PedidoInvestimento>,
  ) {}

  async create(createPedidoInvestimentoDto: CreatePedidoInvestimentoDto) {
    const pedido = this.pedidoRepository.create(createPedidoInvestimentoDto);

    try {
      const createdAt = new Date();
      const expiresAt = new Date(new Date().setHours(createdAt.getHours() + 4));

      const saved = await this.pedidoRepository.save({
        ...pedido,
        criado_em: createdAt,
        atualizado_em: createdAt,
        expira_em: expiresAt,
      });

      return saved;
    } catch (e) {
      console.log(e);
      return Promise.reject('Erro');
    }
  }

  findAll(): Promise<PedidoInvestimento[]> {
    return this.pedidoRepository.find();
  }

  findOne(id: number) {
    return this.pedidoRepository.findOneBy({ id });
  }

  update(id: number, updatePedidoInvestimentoDto: UpdatePedidoInvestimentoDto) {
    return `This action updates a #${id} pedidoInvestimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoInvestimento`;
  }
}
