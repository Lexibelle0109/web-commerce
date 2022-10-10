import { TestBed } from '@angular/core/testing';

import { NgxBelleCatalogService } from './ngx-belle-catalog.service';

describe('NgxBelleCatalogService', () => {
  let service: NgxBelleCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBelleCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
