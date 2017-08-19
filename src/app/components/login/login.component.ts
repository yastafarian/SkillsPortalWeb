import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { LoginForm} from "../../models/login-form";
import { AuthenticationService} from "../../auth-services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  error: String;

  public loginForm: LoginForm;

  constructor(
    private authService: AuthenticationService,
    public dialogRef: MdDialogRef<LoginComponent>
  ) { }

  ngOnInit() {
  }

  prepareRequest() {
    this.loginForm = new LoginForm();
    this.loginForm.username = this.username;
    this.loginForm.password = this.password;
  }

  checkFields(){
    if (this.username.length > 0 &&
      this.password.length > 0) {
      return true;
    }
    this.error = 'Error: Please fill all fields';
    return false;
  }

  onClickLogin(){
    if (this.checkFields()) {
      this.prepareRequest();
      //Login user here
      this.authService.loginUser(this.loginForm).subscribe(res => {
        if (res.hasOwnProperty('token')){
          let jwt = {username: this.loginForm.username, token: res.token};
          this.dialogRef.close(jwt);
        }
        else if (res.hasOwnProperty('message')){
          this.error = res.message;
        }
      });
    }
  }

}
