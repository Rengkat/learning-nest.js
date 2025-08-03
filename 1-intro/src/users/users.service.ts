import { Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { AuthService } from 'src/auth/auth.service';

// interface User {
//   name: string;
//   id: number;
//   age: number;
//   gender: string;
//   isMarried: boolean;
// }

@Injectable()
export class UsersService {
  constructor(private readonly authService: AuthService) {}
  users: {
    name: string;
    id: number;
    age: number;
    gender: string;
    isMarried: boolean;
    email: string;
  }[] = [
    {
      name: 'john',
      email: 'john@gmail.com',
      id: 1,
      age: 25,
      gender: 'male',
      isMarried: true,
    },
    {
      name: 'nanment',
      email: 'nanment@gmail.com',
      id: 2,
      age: 15,
      gender: 'female',
      isMarried: false,
    },
    {
      name: 'nanchin',
      email: 'nanchin@gmail.com',
      id: 3,
      age: 22,
      gender: 'female',
      isMarried: true,
    },
  ];

  getUsers() {
    if(this.authService.isAuthenticated){
    return this.users;
  } else{
    throw new ExceptionsHandler('Not authenticated')
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser({
    name,
    age,
    email,
    gender = 'unknown',
    isMarried = false,
  }: {
    name: string;
    email: string;
    age: number;
    gender?: string;
    isMarried?: boolean;
  }) {
    const newUser = {
      id: this.generateNewId(),
      name,
      email,
      age,
      gender,
      isMarried,
    };

    this.users.push(newUser);
    return newUser;
  }

  private generateNewId(): number {
    const maxId = Math.max(...this.users.map((user) => user.id), 0);
    return maxId + 1;
  }
}
