import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AvailSkill } from '../models/avail-skill';
import { SkillsDataService} from "../data-services/skills-data.service";

@Injectable()
export class SkillResolver implements Resolve<Observable<AvailSkill[]>> {

  constructor(
    private skillsDataService: SkillsDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<AvailSkill[]> {
    return this.skillsDataService.getAllSkills();
  }
}
