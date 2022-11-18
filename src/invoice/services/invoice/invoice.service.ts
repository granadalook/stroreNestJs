import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from '../../entity/envoice.entity';
import { Repository } from 'typeorm';
import {
  CreateInvoiceDto,
  updateInvoiceDto,
} from 'src/invoice/dto/invoice.dto';

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
  async updateInvoice(id: string, changes: CreateInvoiceDto) {
    const invoice = await this.getInvoiceById(id);
    this.facturaRepo.merge(invoice, changes);
    return this.facturaRepo.save(invoice);
  }
  async updateInvoicePatch(id: string, changes: updateInvoiceDto) {
    const invoice = await this.getInvoiceById(id);
    this.facturaRepo.merge(invoice, changes);
    return this.facturaRepo.save(invoice);
  }
  async deleteInvoice(id: string) {
    const deleteFactura = await this.getInvoiceById(id);
    this.facturaRepo.delete(deleteFactura.id);
    return { message: 'FACTURA ELIMINADA', deleteFactura };
  }
}
