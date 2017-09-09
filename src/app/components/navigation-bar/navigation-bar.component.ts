import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {MdDialog} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegForm } from '../../models/reg-form';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  regForm: RegForm;

  public isCollapsed = false;

  @Output()
  profileClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  registerClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  loginClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  logoutClicked: EventEmitter<any> = new EventEmitter();



  constructor(
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  onClickProfile() {
    this.profileClicked.emit();
  }

  onClickLogin() {
    this.loginClicked.emit();
  }

  onClickRegister() {
    this.registerClicked.emit();
  }

  onClickLogout() {
    this.logoutClicked.emit();
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    };
    return false;
  }
}
