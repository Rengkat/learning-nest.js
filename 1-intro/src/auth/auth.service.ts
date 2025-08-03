import { Injectable, ConflictException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

interface User {
  firstName: string;
  surname: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  isAuthenticated = false;
  register({ firstName, surname, email, password }: User) {
    const userExists = this.userService.users.find((u) => u.email === email);

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    this.userService.users.push({ firstName, surname, email, password });
    //Generate  token
    return { message: 'User registered successfully' };
  }

  login({ email, password }: { email: string; password: string }) {
    const user = this.userService.getUserById();
  }
}
