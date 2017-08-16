import { TestBed, inject } from '@angular/core/testing';

import { PeopleApiService } from './people-api.service';

describe('PeopleApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleApiService]
    });
  });

  it('should be created', inject([PeopleApiService], (service: PeopleApiService) => {
    expect(service).toBeTruthy();
  }));
});
