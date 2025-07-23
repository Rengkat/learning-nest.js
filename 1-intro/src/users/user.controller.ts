import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class usersController {
  @Get()
  getUsers(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    const usersService = new UsersService();
    //if(queryString.gender) then do something
    return usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: any) {
    const usersService = new UsersService();
    return usersService.getUserById(id);
  }
}
