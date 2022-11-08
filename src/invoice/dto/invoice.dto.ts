/* eslint-disable prettier/prettier */

import { PartialType } from '@nestjs/swagger';
import { detailInvoiceDto } from './invoice-detail.dto';

/* eslint-disable prettier/prettier */
export class CreateInvoiceDto {
  readonly id: string;
  readonly numero: string;
  readonly factura: string;
  readonly articulo: string;
  readonly descripcion: detailInvoiceDto;
}
export class updateInvoiceDto extends PartialType(CreateInvoiceDto) {}
