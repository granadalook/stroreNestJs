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
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/customer/dto/customer.dto';
import { CustomerService } from 'src/customer/services/customer/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customerService.getAllCustomers();
  }
  @Get(':id')
  getCustumerById(@Param('id') id: string) {
    return this.customerService.getCustomerById(id);
  }
  @Post()
  createCustomer(@Body() body: CreateCustomerDto) {
    return this.customerService.createCustomer(body);
  }
  @Put(':id')
  updateCustumer(@Param('id') id: string, @Body() changes: UpdateCustomerDto) {
    return this.customerService.updateCustomer(id, changes);
  }
  @Patch(':id')
  updateCustomerPatch(
    @Param('id') id: string,
    @Body() changes: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomerPatch(id, changes);
  }
  @Delete(':id')
  deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(id);
  }
}
