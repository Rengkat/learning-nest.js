import { forwardRef, Module } from '@nestjs/common';
import { usersController } from './user.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [usersController],
  providers: [UsersService],
  exports: [UsersService],
  // imports: [forwardRef(() => AuthModule)],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
