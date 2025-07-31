import { PartialType } from '@nestjs/mapped-types';
import { createUserDto } from './createUser.dto';

export class EditUserDto extends PartialType(createUserDto) {}
