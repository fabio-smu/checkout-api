import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoInvestimentoModule } from './pedido-investimento/pedido-investimento.module';
import { PedidoInvestimento } from './pedido-investimento/entities/pedido-investimento.entity';

const mode = process.env.ENV || 'dev'
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${mode}`, isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PWD'),
        database: configService.get<string>('DB_NAME'),
        entities: [PedidoInvestimento],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PedidoInvestimentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
