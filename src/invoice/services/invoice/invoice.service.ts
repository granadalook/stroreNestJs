import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from '../../entity/envoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Factura) private facturaRepo: Repository<Factura>,
  ) {}
  async getAllInvoice() {
    const facturas = await this.facturaRepo.find();
    if (facturas.length === 0) {
      throw new NotFoundException(`  NO HAY FACTURAS`);
    }
    return facturas;
  }
  async getInvoiceById(id: string) {
    const factura = await this.facturaRepo.findOne({
      where: { id: id },
      relations: ['detalle'],
    });
    if (!factura) {
      throw new NotFoundException(`FACTURA ${id} NO EXISTE`);
    }
    return factura;
  }

  async createInvoice(invoice: Factura) {
    return await this.facturaRepo.save(invoice);
  }
  async deleteInvoice(id: string) {
    const deleteFactura = await this.getInvoiceById(id);
    this.facturaRepo.delete(deleteFactura.id);
    return { message: 'FACTURA ELIMINADA', deleteFactura };
  }
  /*updateInvoice(id: string, changes: updateInvoiceDto) {
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
  */
}
