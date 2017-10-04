import { Injectable } from '@angular/core';
import { Person } from '../models/person';

import { PeopleApiService } from '../api-services/people-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleDataService {

  constructor(
    private api : PeopleApiService
  ) { }

  checkIfExists(skill: string, person: Person): number {
    for (var i; i < person.skills.length; i++){
      if (person.skills[i].title == skill) return i;
    }
    return -1;
  }

  // Create a new user
  createPerson(person: Person): Observable<Person> {
    return this.api.createPerson(person);
  }

  // A user wants to remove a skill from his set of skills
  removeSkill(skill: string, person: Person): Observable<Person> {
    person.skills = person.skills.filter((s) => s.title != skill);
    return this.api.updatePerson(person);
  }

  // Add new or update a skill
  updatePerson(person: Person): Observable<Person> {
    return this.api.updatePerson(person);
  }

  getAllPeople(): Observable<Person[]> {
    return this.api.getAllPeople();
  }

  getPersonByUsername(username: string): Observable<Person[]> {
    return this.api.getPersonByUsername(username);
  }

}
