import { TestBed } from '@angular/core/testing';

import { PagespeedService } from './pagespeed.service';

describe('PagespeedService', () => {
  let service: PagespeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagespeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
