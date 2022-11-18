import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detail } from 'src/invoice/entity/detailInvoice.entity';
import { Repository } from 'typeorm';
import {
  detailInvoiceDto,
  updatedetailDto,
} from '../../dto/invoice-detail.dto';

@Injectable()
export class DetailInvoiceService {
  constructor(
    @InjectRepository(detail) private detailRepo: Repository<detail>,
  ) {}
  async getAllDetails() {
    const detalles = await this.detailRepo.find();
    if (detalles.length === 0) {
      throw new NotFoundException(`NO HAY DETALLES`);
    }
    return { message: 'TODOS LOS DETALLES ', detalles };
  }
  async findOneDetail(id: string) {
    const detalle = await this.detailRepo.findOne({ where: { id: id } });
    if (!detalle) {
      throw new NotFoundException(`NO HAY DETALLES CON ID ${id}`);
    }
    return detalle;
  }
  async getDetallesByIdFactura(id: string) {
    const detalleFactura = await this.detailRepo.find({
      where: { idFactura: id },
    });
    if (detalleFactura.length === 0) {
      throw new NotFoundException(`NO HAY DETALLES DE  ESTA FACTURA`);
    }
    return { message: ' DETALLES DE ESTA FACTURA', detalleFactura };
  }
  async updateDetail(id: string, changes: detailInvoiceDto) {
    const detalle = await this.findOneDetail(id);
    this.detailRepo.merge(detalle, changes);
    const editado = await this.detailRepo.save(detalle);
    return { message: 'DETELLE EDITADO', editado };
  }
  async updateDetailPatch(id: string, changes: updatedetailDto) {
    const detalle = await this.findOneDetail(id);
    this.detailRepo.merge(detalle, changes);
    const editado = await this.detailRepo.save(detalle);
    return { message: 'DETELLE EDITADO ', editado };
  }
  async deleteDetail(id: string) {
    const deleteDetail = await this.findOneDetail(id);
    this.detailRepo.delete(deleteDetail.id);
    return { message: 'DETALLE ELIMINADO', deleteDetail };
  }
}
