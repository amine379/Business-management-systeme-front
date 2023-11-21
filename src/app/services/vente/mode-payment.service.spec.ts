import { TestBed } from '@angular/core/testing';

import { ModePaymentService } from './mode-payment.service';

describe('ModePaymentService', () => {
  let service: ModePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
