import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from 'src/invoice/dto/invoice.dto';

@Injectable()
export class InvoiceService {
  getAllInvoice() {
    return;
  }
  getInvoiceById(id: string) {
    return;
  }

  createInvoice(invoice: CreateInvoiceDto) {
    return;
  }
  updateInvoice(id: string, changes: CreateInvoiceDto) {
    return;
  }
  updateInvoicePatch(id: string, changes: CreateInvoiceDto) {
    return;
  }
  deleteInvoice(id: string) {
    return;
  }
}
