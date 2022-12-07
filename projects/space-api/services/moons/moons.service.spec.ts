import { TestBed } from '@angular/core/testing';

import { MoonsService } from './moons.service';

describe('MoonsService', () => {
  let service: MoonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
