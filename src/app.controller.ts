
import { Controller, Get, Request, Post, UseGuards, Response } from '@nestjs/common';
import {AuthService} from "./users/auth/auth.service";
import {LocalAuthGuard} from "./users/auth/guards/local-auth.guard";
import {JwtAuthGuard} from "./users/auth/guards/jwt-auth.guard";


@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Response({passthrough: true}) res) {
    const accToken = await this.authService.login(req.user);
    console.log(accToken);
    const access_token = accToken.access_token;
    console.log(access_token)
    res.cookie('token', `${access_token}`);
    console.log(res.cookies);
    console.log(accToken);
    // return accToken;
    res.send(accToken);
  }


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
// import {Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
// import { AppService } from './app.service';
// import {LocalAuthGuard} from "./users/auth/guards/local-auth.guard";
//
// @Controller()
// export class AppController {
//   @UseGuards(LocalAuthGuard)
//   @Post('auth/login')
//   async login(@Request() req) {
//     return req.user;
//   }
//
//   constructor(private readonly appService: AppService) {
//   }
//
//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
