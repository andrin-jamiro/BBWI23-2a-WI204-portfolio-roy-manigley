import { TestBed } from '@angular/core/testing';

import { CvListResolverService } from './cv-list-resolver.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CvListResolverService', () => {
  let service: CvListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(CvListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
