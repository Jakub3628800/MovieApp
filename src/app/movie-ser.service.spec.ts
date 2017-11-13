import { TestBed, inject } from '@angular/core/testing';

import { MovieSerService } from './movie-ser.service';

describe('MovieSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSerService]
    });
  });

  it('should be created', inject([MovieSerService], (service: MovieSerService) => {
    expect(service).toBeTruthy();
  }));
});
