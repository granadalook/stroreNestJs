import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { detailInvoiceDto } from 'src/invoice/dto/invoice-detail.dto';
import {
  CreateInvoiceDto,
  updateInvoiceDto,
} from 'src/invoice/dto/invoice.dto';
import { Factura } from 'src/invoice/entity/envoice.entity';
import { DetailInvoiceService } from 'src/invoice/services/detail-invoice/detail-invoice.service';
import { InvoiceService } from 'src/invoice/services/invoice/invoice.service';
import { updatedetailDto } from '../../dto/invoice-detail.dto';
@ApiTags('FACTURAS')
@Controller('invoice')
export class InvoiceController {
  constructor(
    private invioceService: InvoiceService,
    private detailInvoiceService: DetailInvoiceService,
  ) {}
  @Get()
  @ApiOperation({ summary: 'TRAE TODAS LAS FACTURAS' })
  getAllFacturas() {
    return this.invioceService.getAllInvoice();
  }
  @Get('detalles')
  @ApiOperation({ summary: 'TRAE TODAS LAS FACTURAS' })
  getAllDetalles() {
    return this.detailInvoiceService.getAllDetails();
  }
  @Get(':id')
  @ApiOperation({ summary: 'TRAE  FACTURAS POR ID' })
  getFacturaById(@Param('id') id: string) {
    return this.invioceService.getInvoiceById(id);
  }
  @Get('/facturaId/:id')
  @ApiOperation({ summary: 'TRAE  LOS DETALLES DE ESA FACTURA' })
  getdetailByFacturaId(@Param('id') id: string) {
    return this.detailInvoiceService.getDetallesByIdFactura(id);
  }
  @Post()
  @ApiOperation({ summary: 'CREA FACTURAS' })
  createFactura(@Body() body: CreateInvoiceDto) {
    const factura = new Factura(body);
    return this.invioceService.createInvoice(factura);
  }
  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({ summary: 'EDITAR FACTURAS COMPLETA' })
  updateFactura(@Param('id') id: string, @Body() changes: CreateInvoiceDto) {
    return this.invioceService.updateInvoice(id, changes);
  }
  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({ summary: 'EDITAR FACTURAS PARCIAL' })
  updateFacturaPatch(
    @Param('id') id: string,
    @Body() changes: updateInvoiceDto,
  ) {
    return this.invioceService.updateInvoicePatch(id, changes);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'ELIMINA FACTURAS' })
  deleteFactura(@Param('id') id: string) {
    return this.invioceService.deleteInvoice(id);
  }
  @Put('detalle/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({ summary: 'EDITAR DETALLE DE LA FACTURA' })
  updateUpdateDetail(
    @Param('id') id: string,
    @Body() changes: detailInvoiceDto,
  ) {
    return this.detailInvoiceService.updateDetail(id, changes);
  }
  @Get('detalle/:id')
  @ApiOperation({ summary: 'TRAE  UN DETALLE POR ID' })
  getDetailById(@Param('id') id: string) {
    return this.detailInvoiceService.findOneDetail(id);
  }
  @Patch('detalle/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({ summary: 'EDITAR DETALLE PARCIAL' })
  updateDetailPatch(@Param('id') id: string, @Body() changes: updatedetailDto) {
    return this.detailInvoiceService.updateDetailPatch(id, changes);
  }
  @Delete('detalle/:id')
  @ApiOperation({ summary: 'ELIMINA DETALLE DE LA FACTURA' })
  deletedETAIL(@Param('id') id: string) {
    return this.detailInvoiceService.deleteDetail(id);
  }
}
