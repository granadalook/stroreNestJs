import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceController } from './controllers/invoice/invoice.controller';
import { detail } from './entity/detailInvoice.entity';
import { Factura } from './entity/envoice.entity';
import { DetailInvoiceService } from './services/detail-invoice/detail-invoice.service';
import { InvoiceService } from './services/invoice/invoice.service';

@Module({
  imports: [TypeOrmModule.forFeature([Factura, detail])],
  controllers: [InvoiceController],
  providers: [InvoiceService, DetailInvoiceService],
})
export class InvoiceModule {}
