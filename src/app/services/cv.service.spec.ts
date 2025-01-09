import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CVService } from './cv.service';

describe('CVService', () => {
  let service: CVService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(CVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
