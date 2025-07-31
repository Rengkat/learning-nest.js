import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/createUser.dto';
import { getUserParamsDto } from './dtos/getUser-params.dto';
import { EditUserDto } from './dtos/edit-user.dto';

@Controller('users')
export class usersController {
  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: getUserParamsDto,
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
  createUser(@Body() user: createUserDto) {
    const usersService = new UsersService();
    usersService.createUser(user);
  }
  @Patch()
  updateUser(@Body() user: EditUserDto) {}
}
