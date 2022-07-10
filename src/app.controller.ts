import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import {Res} from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  public root(@Res() res: Response): any {
    // res.sendFile('index.html');
    res.sendFile('index.html',{ root: "/usr/src/app/public"});
  }

}
