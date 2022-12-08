import { TestBed } from '@angular/core/testing';

import { FeatureEnabledGuard } from './feature-enabled.guard';

describe('FeatureEnabledGuard', () => {
  let guard: FeatureEnabledGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeatureEnabledGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
