import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {MdDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegForm } from '../../models/reg-form';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  regForm: RegForm;

  @Output()
  registerUser: EventEmitter<RegForm> = new EventEmitter();

  constructor(
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  onClickProfile(){
    let dialogRef = this.dialog.open(ProfileComponent);
    console.log('profile clicked');
  }

  onClickLogin(){
    let dialogRef = this.dialog.open(LoginComponent);
    console.log('login clicked');
  }

  onClickRegister(){
    let dialogRef = this.dialog.open(RegisterComponent,
      {
         height: '400px',
         width: '600px',
         disableClose:true
       });
       // remember that this is an asynchronous call
     dialogRef.afterClosed().subscribe(result => {
          this.regForm = result;
          this.registerUser.emit(this.regForm);
     });
  }
}
