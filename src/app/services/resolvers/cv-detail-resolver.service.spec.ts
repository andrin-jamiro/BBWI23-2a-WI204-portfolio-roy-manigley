import { TestBed } from '@angular/core/testing';

import { CvDetailResolverService } from './cv-detail-resolver.service';

describe('CvDetailResolverService', () => {
  let service: CvDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
