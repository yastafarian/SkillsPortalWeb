import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators  } from "@angular/forms";
import { LoginForm} from "../../models/login-form";
import { AuthenticationService} from "../../auth-services/authentication.service";
import { Router } from "@angular/router";
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: FormGroup;

  email: FormControl;
  password: FormControl;

  isError: boolean;

  errorMsg: String;

  public loginForm: LoginForm;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.resetError();
  }

  resetError(){
    this.isError = false
    this.errorMsg = '';
  }

  createFormControls(){
    this.email = new FormControl('',[ Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")]);
    this.password =  new FormControl('', [Validators.required]);
  }

  createForm(){
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  prepareRequest() {
    this.loginForm = new LoginForm();
    this.loginForm.username = this.email.value;
    this.loginForm.password = this.password.value;
  }

  onClickLogin(){
      this.prepareRequest();
      //Login user here
      this.authService.loginUser(this.loginForm).subscribe(res => {
        if (res.hasOwnProperty('token')){
          let jwt = {username: this.loginForm.username, token: res.token};
          localStorage.setItem('currentUser', JSON.stringify(jwt));
          this.snackBar.open('Logged in successfully', 'Dismiss', {
            duration: 3000
          });
          this.router.navigateByUrl('');
        }
        else if (res.hasOwnProperty('message')){
          this.isError = true;
          this.errorMsg = res.message;
        }
      });
  }
}
