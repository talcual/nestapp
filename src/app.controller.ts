import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fire')
  async getFire(){
    var db = admin.database();
    var ref = db.ref("gatos");
    var razas = ref.child('razas');

    razas.set({
      tigri: {
        color: "amarillo"
      },
      chino : {
        color: "blanco."
      }
    });

    return "cadena";
  }

}
