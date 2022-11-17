import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateInvoiceDto } from 'src/invoice/dto/invoice.dto';
import { Factura } from 'src/invoice/entity/envoice.entity';
import { InvoiceService } from 'src/invoice/services/invoice/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invioceService: InvoiceService) {}

  @Get()
  getAllCustomer() {
    return this.invioceService.getAllInvoice();
  }
  @Get(':id')
  getInvoiceById(@Param('id') id: string) {
    return this.invioceService.getInvoiceById(id);
  }
  @Post()
  createCustomer(@Body() body: CreateInvoiceDto) {
    const factura = new Factura(body);
    return this.invioceService.createInvoice(factura);
  }
  /* @Put(':id')
  updateCustumer(@Param('id') id: string, @Body() changes: updateInvoiceDto) {
    return this.invioceService.updateInvoice(id, changes);
  }
  @Patch(':id')
  updateCustomerPatch(
    @Param('id') id: string,
    @Body() changes: updateInvoiceDto,
  ) {
    return this.invioceService.updateInvoicePatch(id, changes);
  }*/
  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.invioceService.deleteInvoice(id);
  }
}
