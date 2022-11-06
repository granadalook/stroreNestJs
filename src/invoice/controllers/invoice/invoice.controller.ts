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
import { InvoiceService } from 'src/invoice/services/invoice/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invioceService: InvoiceService) {}

  @Get()
  getAllCustomer() {
    return this.invioceService.getAllInvoice();
  }
  @Get(':id')
  getCustumerById(@Param('id') id: string) {
    return this.invioceService.getInvoiceById(id);
  }
  @Post()
  createCustomer(@Body() body: CreateInvoiceDto) {
    return this.invioceService.createInvoice(body);
  }
  @Put(':id')
  updateCustumer(@Param('id') id: string, @Body() changes: CreateInvoiceDto) {
    return this.invioceService.updateInvoice(id, changes);
  }
  @Patch(':id')
  updateCustomerPatch(
    @Param('id') id: string,
    @Body() changes: CreateInvoiceDto,
  ) {
    return this.invioceService.updateInvoicePatch(id, changes);
  }
  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.invioceService.deleteInvoice(id);
  }
}
