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

  // POST /people
  createPerson(person: Person): Observable<Person> {
    return this.http
    .post(API_URL + '/people', person)
    .map(response => {
      return new Person(response.json());
    }).catch(this.handleError);
  }

  // PUT /people?username=person.username
  updatePerson(person: Person): Observable<Person> {
    delete person["_id"];
    delete person["__v"];

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(person);
    let url = API_URL + '/people/update_skills/' + person.username;

    console.log('in api update ' + url);
    return this.http
    .put(url , body, options)
    .map(response => {
      return new Person(response.json());
    }).catch(this.handleError);
  }

  // GET /people
  getAllPeople(): Observable<Person[]> {
    return this.http
                .get(API_URL + '/people')
                .map(response => {
                  const people = response.json();
                  return people.map((person) => new Person(person));
                }).catch(this.handleError)
  }

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
