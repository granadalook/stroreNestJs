import { Test, TestingModule } from '@nestjs/testing';
import { DetailInvoiceService } from './detail-invoice.service';

describe('DetailInvoiceService', () => {
  let service: DetailInvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailInvoiceService],
    }).compile();

    service = module.get<DetailInvoiceService>(DetailInvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
