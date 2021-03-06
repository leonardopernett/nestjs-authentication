import { Controller, Get,  Post, Request, UseGuards,  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

      
    constructor(private readonly authService: AuthService){}
      @UseGuards(AuthGuard('local'))
      @Post('login')
     async login(@Request() req){
         const data = await this.authService.login(req.user)
         return {
            message:'exitoso',
            data
         }
      }

     @UseGuards(AuthGuard('jwt'))
      @Get('profile')
      profile(@Request() req){
         return req.user
      }


}
