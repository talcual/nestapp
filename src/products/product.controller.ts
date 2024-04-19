import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './product.services';
import { Product } from './product.model';
import { AuthGuard } from '../auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { HttpService } from '@nestjs/axios';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private jwtService: JwtService,
    private httpService: HttpService,
  ) {}

  @Post()
  create(@Body() productData): Promise<Product> {
    return this.productsService.create(productData);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('mentira')
  async mentira() {
    const payload = { sub: 1, username: 'centella' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  @Get('consumer')
  async consumer() {
    /* this.httpService.axiosRef.interceptors.request.use(function (config) {
      config.headers.Authorization = `Basic ${encodeToken}`;
      return config;
    });*/

    let data = {
      name: 'ditto',
    };

    let response = await this.httpService.axiosRef.get(
      'https://pokeapi.co/api/v2/pokemon/ditto',
    );

    return response.data;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() productData,
  ): Promise<[number, Product[]]> {
    return this.productsService.update(Number(id), productData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.productsService.remove(Number(id));
  }
}
