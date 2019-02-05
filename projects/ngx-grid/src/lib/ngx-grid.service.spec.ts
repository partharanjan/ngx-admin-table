import { TestBed } from '@angular/core/testing';

import { NgxGridService } from './ngx-grid.service';

describe('NgxGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGridService = TestBed.get(NgxGridService);
    expect(service).toBeTruthy();
  });
});
