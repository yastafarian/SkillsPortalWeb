import { Injectable } from '@angular/core';
import { RegForm } from '../models/reg-form'
import { LoginForm} from "../models/login-form";

import { AuthApiService } from '../api-services/auth-api.service'
import { Observable } from 'rxjs/Observable';
import {Person} from "../models/person";
import {ProfileApiService} from "../api-services/profile-api.service";
import {Skill} from "../models/skill";

@Injectable()
export class ProfileDataService {

  constructor(
    private api: ProfileApiService
  ) { }

  getProfile(): Observable<Person>{
    const tokenString = localStorage.getItem('currentUser');
    let jwt = JSON.parse(tokenString);
    return this.api.getProfile(jwt.token);
  }

  deleteSkill(skill: string): Observable<Person>{
    const tokenString = localStorage.getItem('currentUser');
    let jwt = JSON.parse(tokenString);
    return this.api.deleteSkill(skill, jwt.token);
  }

  addSkill(skill: Skill): Observable<Person>{
    const tokenString = localStorage.getItem('currentUser');
    let jwt = JSON.parse(tokenString);
    return this.api.addSkill(skill, jwt.token);
  }

  editSkill(skill: Skill): Observable<Person> {
    const tokenString = localStorage.getItem('currentUser');
    let jwt = JSON.parse(tokenString);
    return this.api.editSkill(skill, jwt.token);
  }
}
