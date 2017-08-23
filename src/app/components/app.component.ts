import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';

import { AvailSkill } from '../models/avail-skill';
import{ Person } from '../models/person';
import { RegForm } from '../models/reg-form';

import { SkillsDataService } from '../data-services/skills-data.service';
import { PeopleDataService } from '../data-services/people-data.service';
import { AuthenticationService} from '../auth-services/authentication.service';

import { PersonDetailsComponent } from './person-details/person-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SkillsDataService, PeopleDataService]
})
export class AppComponent implements OnInit {

  skills: AvailSkill[] = [];

  people: Person[] = [];

  selectedSkill: AvailSkill;

  constructor(
    private skillsDataService: SkillsDataService,
    private peopleDataService: PeopleDataService,
    private authService: AuthenticationService,
    public dialog: MdDialog
  ) {}

  public ngOnInit() {
    this.onGetAllSkills();
  }

  onClickProfile(){
    this.authService.getProfile().subscribe(res => {
      const user = new Person(res);

      const dialogRef = this.dialog.open(ProfileComponent, {
        height: '300px',
        width: '310px',
        data: {
          profile: user
        }});

    });

  }

  onClickLogout(){
    console.log('local storage length' + localStorage.length);
    localStorage.removeItem('currentUser');
  }

  onClickLogin(){
    const dialogRef = this.dialog.open(LoginComponent,
      {
        height: '300px',
        width: '310px',
        disableClose: true
      });
    // remember that this is an asynchronous call
    dialogRef.afterClosed().subscribe(result => {
      if (result.hasOwnProperty('token')) {
        localStorage.setItem('currentUser', JSON.stringify(result));
      }
    });
  }

  onClickRegister() {
    const dialogRef = this.dialog.open(RegisterComponent,
      {
        height: '400px',
        width: '600px',
        disableClose: true
      });
    // remember that this is an asynchronous call
    dialogRef.afterClosed().subscribe(result => {
      //this.regForm = result;
    });
  }

  isLoggedIn(){
    return (localStorage.getItem('currentUser'));
  }

  onSkillSelected(selectedSkill) {
    this.selectedSkill = selectedSkill;
    // Now we have the user names
    this.getPeopleWithSelectedSkill();
  }

  getPeopleWithSelectedSkill() {
    console.log('getting people with skill: ' + this.selectedSkill.title);
    this.people = [];
    // it returns an array, but a username is unique; therefore, we get a single
    // element array.
    for (const username of this.selectedSkill.people){
      console.log(this.selectedSkill.people.length);
      this.peopleDataService
          .getPersonByUsername(username)
          .subscribe((personArray) => {
            // TODO: handle empty array here.
            const person = personArray[0];
            this.people = this.people.concat(person);
          });
    }
  }

  onPersonClicked(person: Person) {
    // open dialog here.
    const dialogRef = this.dialog.open(PersonDetailsComponent);
    dialogRef.componentInstance.person = person;
    console.log(person.name);
  }

  onGetAllSkills() {
    this.skillsDataService
          .getAllSkills()
          .subscribe((skills) => this.skills = skills);
  }

}
