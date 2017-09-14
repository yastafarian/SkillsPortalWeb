import {Component, OnInit} from '@angular/core';
import {MdDialog, MdSnackBar} from '@angular/material';

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
import {LogoutComponent} from "./logout/logout.component";


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
    private authService: AuthenticationService,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) {}

  public ngOnInit() {}


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

    //const dialogRef = this.dialog.open(LogoutComponent);

    /*
    // remember that this is an asynchronous call
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        console.log('local storage length' + localStorage.length);
        localStorage.removeItem('currentUser');
        this.snackBar.open('Logged in successfully', 'Dismiss', {
          duration: 3000
        });
      }
    });
    */
    console.log('local storage length' + localStorage.length);
    localStorage.removeItem('currentUser');
    this.snackBar.open('Logged out successfully', 'Dismiss', {
      duration: 3000
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

}
