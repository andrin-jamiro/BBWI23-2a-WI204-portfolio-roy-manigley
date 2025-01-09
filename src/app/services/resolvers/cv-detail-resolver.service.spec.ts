import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CvDetailResolverService } from './cv-detail-resolver.service';

describe('CvDetailResolverService', () => {
  let service: CvDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(CvDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
