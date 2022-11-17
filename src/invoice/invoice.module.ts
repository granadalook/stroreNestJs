import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceController } from './controllers/invoice/invoice.controller';
import { Factura } from './entity/envoice.entity';
import { InvoiceService } from './services/invoice/invoice.service';
import { DetailInvoiceService } from './services/detail-invoice/detail-invoice.service';
import { detail } from './entity/detailInvoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Factura, detail])],
  controllers: [InvoiceController],
  providers: [InvoiceService, DetailInvoiceService],
})
export class InvoiceModule {}
