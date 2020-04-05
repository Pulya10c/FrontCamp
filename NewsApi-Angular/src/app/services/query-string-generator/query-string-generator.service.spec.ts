import { TestBed } from '@angular/core/testing';

import { QueryStringGeneratorService } from './query-string-generator.service';

describe('QueryStringGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryStringGeneratorService = TestBed.get(QueryStringGeneratorService);
    expect(service).toBeTruthy();
  });
});
