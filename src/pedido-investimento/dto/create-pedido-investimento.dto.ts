import { IsEmail, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreatePedidoInvestimentoDto {
  @IsNotEmpty({ message: 'URL da Oferta é um campo obrigatório' })
  @Expose({ name: 'url_oferta' })
  urlOferta: string;

  @IsNotEmpty({ message: 'Valor é um campo obrigatório' })
  valor: number;

  @IsNotEmpty()
  @Expose({ name: 'nome_completo' })
  readonly nomeCompleto: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly cpf: string;

  @IsNotEmpty()
  readonly ip: string;

  @IsNotEmpty()
  @Expose({ name: 'user_agent' })
  readonly userAgent: string;
}
