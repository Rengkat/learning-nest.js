import { Injectable } from '@nestjs/common';

interface User {
  name: string;
  id: number;
  age: number;
  gender: string;
  isMarried: boolean;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { name: 'john', id: 1, age: 25, gender: 'male', isMarried: true },
    { name: 'nanment', id: 2, age: 15, gender: 'female', isMarried: false },
    { name: 'nanchin', id: 3, age: 22, gender: 'female', isMarried: true },
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser({
    name,
    age,
    gender = 'unknown',
    isMarried = false,
  }: {
    name: string;
    age: number;
    gender?: string;
    isMarried?: boolean;
  }) {
    const newUser: User = {
      id: this.generateNewId(),
      name,
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
