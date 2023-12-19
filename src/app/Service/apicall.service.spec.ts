import { TestBed } from '@angular/core/testing';

import { APIcallService } from './apicall.service';

describe('APIcallService', () => {
  let service: APIcallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIcallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
