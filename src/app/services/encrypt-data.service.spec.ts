import { TestBed } from '@angular/core/testing';

import { EncryptDataService } from './encrypt-data.service';

describe('EncryptedStorageService', () => {
  let service: EncryptDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
