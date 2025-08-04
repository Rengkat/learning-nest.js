import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from './dtos/createUser.dto';

@Injectable()
export class UsersService {
  // constructor(@Inject(forwardRef(()=>AuthService)) private readonly authService: AuthService) {}
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  public async createUser(createUserDto: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (userExist) {
      throw new BadRequestException('User already exists');
    }

    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
  getUsers() {
    return this.userRepository.find();
  }

  getUserById(id: number) {}
}
