import { TestBed } from '@angular/core/testing';

import { CvListResolverService } from './cv-list-resolver.service';

describe('CvListResolverService', () => {
  let service: CvListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
