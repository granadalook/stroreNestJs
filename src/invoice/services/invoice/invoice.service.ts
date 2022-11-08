import { Injectable } from '@nestjs/common';
import {
  CreateInvoiceDto,
  updateInvoiceDto,
} from 'src/invoice/dto/invoice.dto';

@Injectable()
export class InvoiceService {
  inviove = [
    {
      id: '1',
      numero: 'juan',
      factura: 'restrepo',
      articulo: '123456789',
      descripcion: {
        precio: '124',
        fecha: 'dsdssd',
        articulo: 'dadsasd',
        cantidad: 'dasd',
      },
    },
  ];
  getAllInvoice() {
    return this.inviove;
  }
  getInvoiceById(id: string) {
    return this.inviove.find((inviove) => inviove.id === id);
  }

  createInvoice(invoice: CreateInvoiceDto) {
    return this.inviove.push(invoice);
  }
  updateInvoice(id: string, changes: updateInvoiceDto) {
    const invoice = this.getInvoiceById(id);
    if (!invoice) {
      return { message: 'CLIENTE NO EXISTE' };
    }
    invoice.id = changes.id;
    invoice.numero = changes.numero;
    invoice.articulo = changes.articulo;
    invoice.descripcion = changes.descripcion;
    return this.createInvoice(invoice);
  }
  updateInvoicePatch(id: string, changes: updateInvoiceDto) {
    const invoice = this.getInvoiceById(id);
    if (!invoice) {
      return { message: 'CLIENTE NO EXISTE' };
    }
    invoice.id = changes.id;
    invoice.numero = changes.numero;
    invoice.articulo = changes.articulo;
    invoice.descripcion = changes.descripcion;
    return this.createInvoice(invoice);
  }
  deleteInvoice(id: string) {
    const invioceDelete = this.inviove.findIndex(
      (customer) => customer.id === id,
    );
    const eliminado = this.inviove.splice(invioceDelete, 1);
    return {
      message: `INVOICE
     ELIMINADO ${id} `,
      eliminado,
    };
  }
}
