import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { IDescripcion } from '../interface/descripcion.interface';
export class detailInvoiceDto implements IDescripcion {
  @IsOptional()
  id: string;
  @IsOptional()
  idFactura: string;
  @IsNotEmpty({ message: 'EL CAMPO precio NO DEBE ESTAR  VACIO ' })
  @ApiProperty({ description: ' PRECIO DEL ARTICULO' })
  readonly precio: string;
  @IsString()
  @IsNotEmpty({ message: 'EL CAMPO articulo NO DEBE ESTAR  VACIO ' })
  @ApiProperty({ description: ' ARTICULO DE LA FACTURA' })
  readonly articulo: string;
  @IsString()
  @IsNotEmpty({ message: 'EL CAMPO cantidad NO DEBE ESTAR  VACIO ' })
  @ApiProperty({ description: 'CANTIDAD DE ARTICULOS' })
  readonly cantidad: string;
}

export class updatedetailDto extends PartialType(detailInvoiceDto) {}
