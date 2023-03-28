import { Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class PedidoInvestimento {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  valor: number;

  @Column()
  url_oferta: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  nome_completo: string;

  @Column()
  ip: string;

  @Column()
  user_agent: string;

  @Column({ type: 'timestamptz' })
  @Transform(({ value }) => new Date(value).toLocaleString())
  criado_em: Date;

  @Column({ type: 'timestamptz' })
  @Transform(({ value }) => new Date(value).toLocaleString())
  atualizado_em: Date;

  @Column({ nullable: true, type: 'timestamptz', default: null })
  @Transform(({ value }) => (value ? new Date(value).toLocaleString() : null))
  expira_em: Date;
}
