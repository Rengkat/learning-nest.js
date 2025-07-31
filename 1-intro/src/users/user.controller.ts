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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/createUser.dto';
import { getUserParamsDto } from './dtos/getUser-params.dto';
import { EditUserDto } from './dtos/edit-user.dto';

@Controller('users')
export class usersController {
  constructor(private userService: UsersService) {}
  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param() param: getUserParamsDto,
  ) {
    //default and validation pipe is always using new keyword

    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: any) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: createUserDto) {
    this.userService.createUser(user);
  }
  @Patch()
  updateUser(@Body() user: EditUserDto) {
    console.log(user);
  }
}
