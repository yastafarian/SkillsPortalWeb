import { Injectable } from '@angular/core';
import { Person } from '../models/person';

import { PeopleApiService } from '../api-services/people-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleDataService {

  constructor(
    private api : PeopleApiService
  ) { }

  getPersonByUsername(username: string): Observable<Person[]> {
    return this.api.getPersonByUsername(username);
  }

}
