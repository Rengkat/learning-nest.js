import { Module } from '@nestjs/common';
import { usersController } from './user.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [usersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
