import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AboutMeService } from './about-me.service';

describe('AboutMeService', () => {
  let service: AboutMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(AboutMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
