import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsOptional,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { detailInvoiceDto } from './invoice-detail.dto';
import { Type } from 'class-transformer';
import { IFactura } from '../interface/fatctura.interface';

export class CreateInvoiceDto implements IFactura {
  @IsOptional()
  id: string;
  @IsOptional()
  @ApiProperty({ description: 'FECHA DE LA CREACION' })
  FechaCreacion: Date;
  @IsString()
  @IsNotEmpty({ message: 'EL CAMPO cliente NO DEBE ESTAR  VACIO ' })
  @ApiProperty({ description: 'NOMBRE DEL CLIENTE' })
  readonly cliente: string;
  @ValidateNested()
  @Type(() => detailInvoiceDto)
  @ApiProperty({ description: 'DESCRIPCION DE LA FACTURA' })
  readonly descripcion: detailInvoiceDto[];
}
export class updateInvoiceDto extends PartialType(CreateInvoiceDto) {}
