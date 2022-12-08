import { TestBed } from '@angular/core/testing';

import { BusyInterceptor } from './busy.interceptor';

describe('BusyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BusyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BusyInterceptor = TestBed.inject(BusyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
