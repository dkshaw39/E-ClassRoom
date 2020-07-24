import { TestBed } from '@angular/core/testing';

import { ClassRoomService } from './classroom.service';

describe('ClassRoomService', () => {
  let service: ClassRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
