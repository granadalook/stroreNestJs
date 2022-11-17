import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from '../../entity/envoice.entity';
import { CreateInvoiceDto } from 'src/invoice/dto/invoice.dto';
import { Repository } from 'typeorm';
import { DetailInvoiceService } from '../detail-invoice/detail-invoice.service';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Factura) private factiraRepo: Repository<Factura>,
    private detailService: DetailInvoiceService,
  ) {}
  async getAllInvoice() {
    const facturas = await this.factiraRepo.find();
    if (!facturas) {
      throw new NotFoundException(`  NO HAY FACTURAS`);
    }
    return facturas;
  }
  async getInvoiceById(id: string) {
    const factura = await this.factiraRepo.findOne({
      where: { id: id },
      relations: ['detalles'],
    });
    console.log('factura', factura);
    if (!factura) {
      throw new NotFoundException(`FACTURA ${id} NO EXISTE`);
    }
    return factura;
  }

  async createInvoice(invoice: CreateInvoiceDto) {
    const newFactura = this.factiraRepo.create(invoice);

    const factur = await this.factiraRepo.save(newFactura);
    if (invoice.descripcion) {
      await this.detailService.createDetail(invoice.descripcion, factur.id);
    }
    return factur;
  }
  async deleteInvoice(id: string) {
    const deleteFactura = await this.getInvoiceById(id);
    return this.factiraRepo.delete(id);
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
