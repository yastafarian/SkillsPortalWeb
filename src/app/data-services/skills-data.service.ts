import { Injectable } from '@angular/core';
import { AvailSkill } from '../models/avail-skill'

import { SkillsApiService } from '../api-services/skills-api.service'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SkillsDataService {


  constructor(
    private api: SkillsApiService
  ) { }

  // a user listed a skill that doesnt exist in the DB
  createSkill(skill: AvailSkill): Observable<AvailSkill> {
    return this.api.createSkill(skill);
  }

  // a user is either deleted or no longer wants to list the skill
  removeUser(username: string, skill: AvailSkill): Observable<AvailSkill> {
    skill.people = skill.people.filter((u) => u.username != username);
    return this.api.updateSkill(skill);
  }

  /*
  // a new user added, or existing user learned the skill
  addUser(username: string, skill: AvailSkill): Observable<AvailSkill> {
    let skill = {
      username: username,
      level: skill.le
    }
    skill.people = skill.people.concat(username);
    return this.api.updateSkill(skill);
  }
  */

  getAllSkills(): Observable<AvailSkill[]> {
    return this.api.getAllSkills();
  }

  getSkillByTitle(username: string): Observable<AvailSkill> {
    return this.api.getSkillByTitle(username);
  }

}
