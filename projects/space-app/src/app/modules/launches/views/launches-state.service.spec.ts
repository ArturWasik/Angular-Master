import { TestBed } from '@angular/core/testing';

import { LaunchesStateService } from './launches-state.service';

describe('LaunchesStateService', () => {
  let service: LaunchesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
