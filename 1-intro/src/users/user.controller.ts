import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class usersController {
  @Get()
  getUsers(@Query() queryString: any) {
    const usersService = new UsersService();
    console.log(queryString);
    return usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: any) {
    const usersService = new UsersService();
    return usersService.getUserById(+id);
  }
}
