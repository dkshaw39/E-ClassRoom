import { TestBed } from '@angular/core/testing';

import { AngularfireAuthGuard } from './angularfire-auth.guard';

describe('AngularfireAuthGuard', () => {
  let guard: AngularfireAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AngularfireAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
