import { TestBed, inject } from '@angular/core/testing';

import { PeopleDataService } from './people-data.service';

describe('PeopleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleDataService]
    });
  });

  it('should be created', inject([PeopleDataService], (service: PeopleDataService) => {
    expect(service).toBeTruthy();
  }));
});
