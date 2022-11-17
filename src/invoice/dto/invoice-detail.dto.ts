import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class detailInvoiceDto {
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
