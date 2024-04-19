import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { ProductsService } from './product.services';
import { ProductsController } from './product.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [SequelizeModule.forFeature([Product]), HttpModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
