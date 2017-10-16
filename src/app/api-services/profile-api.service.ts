import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import {Http, RequestOptions, Response, Headers} from '@angular/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Skill} from "../models/skill";

const API_URL = environment.apiUrl;

@Injectable()
export class ProfileApiService {

  constructor(
    private http: Http
  ) { }

  //DELETE /profile/delete_skill/:skill
  deleteSkill(skill: string, token: string): Observable<Person> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .delete(API_URL + '/profile/delete_skill/' + skill, options)
      .map(res => {
        return new Person(res.json());
      }).catch(this.handleError);
  }

  //PUT /profile/add_skill
  addSkill(skill: Skill, token: string): Observable<Person> {
    let headers = new Headers({'Authorization': 'Bearer ' + token});
    let options = new RequestOptions({headers: headers});

    return this.http
      .put(API_URL + '/profile/add_skill', skill, options)
      .map(res => {
        return new Person(res.json());
      }).catch(this.handleError);
  }

  // /profile/edit_skill

  editSkill(skill: Skill, token: string): Observable<Person> {
    let headers = new Headers({'Authorization': 'Bearer ' + token});
    let options = new RequestOptions({headers: headers});

    return this.http
      .put(API_URL + '/profile/edit_skill', skill, options)
      .map(res => {
        return new Person(res.json());
      }).catch(this.handleError);
  }

  //GET /profile
  getProfile(token: string): Observable<Person> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get(API_URL + '/profile', options)
      .map(response => {
        return new Person(response.json());
      }).catch(this.handleJwtError);
  }

  private handleJwtError(error: Response | any){
    console.error('SkillsApiService::handleError', error);
    localStorage.removeItem('currentUser');
    return Observable.throw(error);
  }

  private handleError (error: Response | any) {
    console.error('SkillsApiService::handleError', error);
    return Observable.throw(error);
  }

}
