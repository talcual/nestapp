import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/product.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { EventsModule } from './ws/eventos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'aws-0-us-west-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.jmitltbowzguodtezluk',
      password: '@@eltc870122',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    ProductsModule,
    EventsModule,
    MongooseModule.forRoot(
      'mongodb+srv://tdev:eltc870122@tdev.lgyl6o5.mongodb.net/?retryWrites=true&w=majority',
    ),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
