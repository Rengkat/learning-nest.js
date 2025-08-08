import { forwardRef, Module } from '@nestjs/common';
import { usersController } from './user.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';

@Module({
  controllers: [usersController],
  providers: [UsersService],
  exports: [UsersService],
  // imports: [forwardRef(() => AuthModule)],
  imports: [TypeOrmModule.forFeature([User, Profile])],
})
export class UsersModule {}
