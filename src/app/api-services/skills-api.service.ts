import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import { AvailSkill } from '../models/avail-skill';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class SkillsApiService {

  constructor(
    private http: Http
  ) { }


  // GET /skill
  getAllSkills(): Observable<AvailSkill[]> {
    console.log('getting all skills');
    return this.http
                .get(API_URL + '/skills')
                .map(response => {
                  console.log('received ' + response.json());
                  const skills = response.json();
                  return skills.map((skill) => new AvailSkill(skill));
                }).catch(this.handleError)
  }


  private handleError (error: Response | any) {
    console.error('SkillsApiService::handleError', error);
    return Observable.throw(error);
  }

}
