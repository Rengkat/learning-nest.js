import { Type } from 'class-transformer';
import { isBoolean, isNumber } from 'class-validator';

export class getUserParamsDto {
  @isBoolean()
  isMarried: boolean;
}
