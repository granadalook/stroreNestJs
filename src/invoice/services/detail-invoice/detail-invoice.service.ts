import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detail } from 'src/invoice/entity/detailInvoice.entity';
import { Repository } from 'typeorm';
import { detailInvoiceDto } from '../../dto/invoice-detail.dto';

@Injectable()
export class DetailInvoiceService {
  constructor(
    @InjectRepository(detail) private detailRepo: Repository<detail>,
  ) {}

  createDetail(detalles: detailInvoiceDto, idFactura: string) {
    const newDetail = this.detailRepo.create(detalles);
    newDetail.idFactura = idFactura;
    return this.detailRepo.save(newDetail);
  }
}
