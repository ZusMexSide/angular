import { TestBed } from '@angular/core/testing';

import { ClientDataSourceService } from './client-data-source.service';

describe('ClientDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDataSourceService = TestBed.get(ClientDataSourceService);
    expect(service).toBeTruthy();
  });
});
