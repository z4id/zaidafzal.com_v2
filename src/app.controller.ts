import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import {Res} from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  public root(@Res() res: Response): any {
    res.sendFile('index.html',{ root: "/usr/src/app/public"});
  }

  @Get('/feedback')
  public feedback(@Res() res: Response): any {
    res.sendFile('index.html',{ root: "/usr/src/app/public"});
    res.redirect('https://docs.google.com/forms/d/e/1FAIpQLSfDCBa-9DFyqL7aen0Brmf0xoJcVOC4mqokAklCed6SRzw7Wg/viewform?usp=sf_link');
  }

}
