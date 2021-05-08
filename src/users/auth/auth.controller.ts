// import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { JwtAuthGuard } from './guards/jwt-auth.guard';
// import { LocalAuthGuard } from './guards/local-auth.guard';
//
// @Controller()
// export class AuthController {
//     constructor(private readonly authService: AuthService) {}
//
//     @UseGuards(LocalAuthGuard)
//     @Post('auth/login')
//     async login(@Request() req) {
//         const accToken = this.authService.login(req.user);
//         console.log(accToken);
//         console.log("here");
//         req.cookies('token', `${accToken}`);
//         return accToken;
//     }
//
//     @UseGuards(JwtAuthGuard)
//     @Get('profile')
//     getProfile(@Request() req) {
//         req.setCookie('user', `${req.user}`);
//         return req.user;
//     }
// }
