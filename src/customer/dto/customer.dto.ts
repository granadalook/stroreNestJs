/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class CreateCustomerDto {
  readonly id: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly telefono: string;
}
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
