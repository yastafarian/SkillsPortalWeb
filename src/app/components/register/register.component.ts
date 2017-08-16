import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { RegForm } from '../../models/reg-form';
import { AuthenticationService} from '../../auth-services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {

  email: String;
  name: String;
  username: String;
  password: String;
  conPass: String;
  error: String;

  public regForm: RegForm;

  constructor(
      private authService: AuthenticationService,
      public dialogRef: MdDialogRef<RegisterComponent>
  ) { }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)){
      return true;
    }
    this.error = 'Error: Invalid email';
    return false;
  }

  checkFields(){
    if (this.email.length > 0 &&
        this.name.length > 0 &&
        this.username.length > 0 &&
        this.password.length > 0 &&
        this.conPass.length > 0){
          return true;
        }
    this.error = 'Error: Please fill all fields';
    return false;
  }

  matchPasswords(){
    if (this.password === this.conPass){
      return true;
    }
    this.error = 'Error: Passowrds do not match'
    return false;
  }

  checkEntries() {
    if (!this.checkFields()) return false;
    if (!this.validateEmail(this.email)) return false;
    if (!this.matchPasswords()) return false;
    return true;
  }

  prepareResponse(){
    this.regForm = new RegForm();
    this.regForm.email = this.email;
    this.regForm.name = this.name;
    this.regForm.username = this.username;
    this.regForm.password = this.password;
  }

  ngOnInit() {
    this.error = 'Please fill the fields';
  }

  onClickRegister(){
    if (this.checkEntries()){
      this.prepareResponse();

      //TODO: Call Authentication service
      //      based on the response perform action.
      this.authService
          .registerUser(this.regForm)
          .subscribe(res => {
            if (res.hasOwnProperty("token")){
              console.log("registering");
              this.dialogRef.close(this.regForm);
            }
            else if (res.hasOwnProperty("message")){
                this.error = res.message;
            }
          });
    }
  }

}