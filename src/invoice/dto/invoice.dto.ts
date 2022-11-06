/* eslint-disable prettier/prettier */
import { detailInvoiceDto } from './invoice-detail.dto';

/* eslint-disable prettier/prettier */
export class CreateInvoiceDto {
  readonly id: string;
  readonly numero: string;
  readonly factura: string;
  readonly articulo: string;
  readonly descripcion: detailInvoiceDto;
}
