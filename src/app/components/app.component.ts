import {Component, OnInit} from '@angular/core';
import {MdDialog, MdSnackBar} from '@angular/material';

import { AvailSkill } from '../models/avail-skill';
import{ Person } from '../models/person';
import { RegForm } from '../models/reg-form';

import { SkillsDataService } from '../data-services/skills-data.service';
import { PeopleDataService } from '../data-services/people-data.service';
import { AuthenticationService} from '../auth-services/authentication.service';



import { PersonDetailsComponent } from './main-display/person-details/person-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile-display/profile/profile.component';
import {LogoutComponent} from "./logout/logout.component";
import {ProfileDataService} from "../data-services/profile-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SkillsDataService, PeopleDataService]
})
export class AppComponent implements OnInit {


  constructor(
    public snackBar: MdSnackBar,
  ) {}

  public ngOnInit() {}


  onClickLogout(){
    console.log('local storage length' + localStorage.length);
    localStorage.removeItem('currentUser');
    this.snackBar.open('Logged out successfully', 'Dismiss', {
      duration: 3000
    });
  }


  isLoggedIn(){
    /*
      TODO: Check if the JWT is valid or not here
     */
    return (localStorage.getItem('currentUser'));
  }

}
