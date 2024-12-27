import { TestBed } from '@angular/core/testing';

import { HasChangesGuardService } from './has-changes-guard.service';

describe('HasChangesGuardService', () => {
  let service: HasChangesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasChangesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
