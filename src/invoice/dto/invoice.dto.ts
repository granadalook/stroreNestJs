import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { detailInvoiceDto } from './invoice-detail.dto';
import { Type } from 'class-transformer';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty({ message: 'EL CAMPO cliente NO DEBE ESTAR  VACIO ' })
  @ApiProperty({ description: 'NOMBRE DEL CLIENTE' })
  readonly cliente: string;
  @ValidateNested()
  @Type(() => detailInvoiceDto)
  @ApiProperty({ description: 'DESCRIPCION DE LA FACTURA' })
  readonly descripcion: detailInvoiceDto;
}
export class updateInvoiceDto extends PartialType(CreateInvoiceDto) {}
