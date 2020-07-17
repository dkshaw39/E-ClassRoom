import { TestBed } from '@angular/core/testing';

import { SharedSubjectDataService } from './shared-subject-data.service';

describe('SharedSubjectDataService', () => {
  let service: SharedSubjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSubjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
