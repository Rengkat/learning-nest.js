import {
  isBoolean,
  isEmail,
  isNotEmpty,
  IsOptional,
  isString,
} from 'class-validator';

export class createUserDto {
  @isString()
  @isNotEmpty()
  name: string;
  id: number;
  age: number;

  @isString()
  @IsOptional()
  gender?: string;

  @isBoolean()
  isMarried: boolean;

  @isEmail()
  email: string;
}
