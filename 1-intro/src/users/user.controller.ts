import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class usersController {
  @Get()
  getUsers() {
    const usersService = new UsersService();
    return usersService.getUsers();
  }

  @Post()
  createUser() {
    const usersService = new UsersService();
    const user = usersService.createUser({ name, age, gender, isMarried });
    return { message: 'user created', user };
  }
}
