import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Person} from "../models/person";
import {ProfileDataService} from "../data-services/profile-data.service";

@Injectable()
export class ProfileResolver implements Resolve<Observable<Person>> {

  constructor(
    private profileService: ProfileDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Person> {
    let token = JSON.parse(localStorage.getItem('currentUser'));
    console.log('resolving profile ' + token.username);
    return this.profileService.getProfile();
  }
}
