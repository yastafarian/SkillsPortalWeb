import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import {Http, RequestOptions, Response, Headers} from '@angular/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class PeopleApiService {

  constructor(
    private http: Http
  ) { }


  // GET  /people?username=person.username
  // it returns an array, but a username is unique; therefore, we get a single
  // element array.
  getPersonByUsername(username: string): Observable<Person[]> {
    console.log("getting user " + username);
    return this.http
                .get(API_URL + '/people/' + username)
                .map(response => {
                  const people = response.json();
                  return people.map((person) => new Person(person));
                }).catch(this.handleError)
  }

  private handleError (error: Response | any) {
    console.error('SkillsApiService::handleError', error);
    return Observable.throw(error);
  }

}
