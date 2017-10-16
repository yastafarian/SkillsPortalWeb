import { Injectable } from '@angular/core';
import { AvailSkill } from '../models/avail-skill'

import { SkillsApiService } from '../api-services/skills-api.service'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SkillsDataService {


  constructor(
    private api: SkillsApiService
  ) { }

  getAllSkills(): Observable<AvailSkill[]> {
    return this.api.getAllSkills();
  }

}
