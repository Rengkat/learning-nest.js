import { createUserDto } from 'src/users/dtos/createUser.dto';

export class createProfileDto {
  @isString({ message: 'name should be a string' })
  @isNotEmpty({ message: 'name can not be empty' })
  @maxLength(5, { message: 'should have max of 5' })
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

  @IsOptional()
  user?: createUserDto | null;
}
