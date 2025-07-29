import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/createUser.dto';

@Controller('users')
export class usersController {
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    //default and validation pipe is always using new keyword
    const usersService = new UsersService();
    console.log(limit, page);
    return usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: any) {
    const usersService = new UsersService();
    return usersService.getUserById(id);
  }

  @Post()
  createUser(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    user: createUserDto,
  ) {
    const usersService = new UsersService();
    usersService.createUser(user);
  }
}
