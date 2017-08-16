import { TestBed, inject } from '@angular/core/testing';

import { SkillsDataService } from './skills-data.service';

describe('SkillsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkillsDataService]
    });
  });

  it('should be created', inject([SkillsDataService], (service: SkillsDataService) => {
    expect(service).toBeTruthy();
  }));
});
