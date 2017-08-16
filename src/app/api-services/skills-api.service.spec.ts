import { TestBed, inject } from '@angular/core/testing';

import { SkillsApiService } from './skills-api.service';

describe('SkillsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsApiService]
    });
  });

  it('should be created', inject([SkillsApiService], (service: SkillsApiService) => {
    expect(service).toBeTruthy();
  }));
});
