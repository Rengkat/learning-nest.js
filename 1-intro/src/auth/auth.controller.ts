import { Body, Controller, Post } from '@nestjs/common';
import { registerUserDto } from 'src/users/dtos/registerUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: registerUserDto) {
    return this.authService.register(user);
  }
}
