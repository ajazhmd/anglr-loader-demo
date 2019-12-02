import { TestBed } from '@angular/core/testing';

import { AnglrLoaderService } from './anglr-loader.service';

describe('AnglrLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnglrLoaderService = TestBed.get(AnglrLoaderService);
    expect(service).toBeTruthy();
  });
});
