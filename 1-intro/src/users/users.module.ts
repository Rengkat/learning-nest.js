import { forwardRef, Module } from '@nestjs/common';
import { usersController } from './user.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [usersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [forwardRef(() => AuthModule)],
})
export class UsersModule {}
