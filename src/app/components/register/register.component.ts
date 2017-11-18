import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators  } from "@angular/forms";
import { RegForm } from '../../models/reg-form';
import { AuthenticationService} from '../../auth-services/authentication.service';
import {MdSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  name: FormControl;
  email: FormControl;
  password: FormControl;
  conPass: FormControl;

  isError: boolean;

  errorMsg: String;

  public regForm: RegForm;

  constructor(
      private authService: AuthenticationService,
      private router: Router,
      public snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.isError = false
    this.errorMsg = '';
  }

  createFormControls(){
      this.name = new FormControl('', Validators.required);
      this.email = new FormControl('',[ Validators.required,
                                       Validators.pattern("[^ @]*@[^ @]*")]);
      this.password =  new FormControl('', [ Validators.minLength(8),
                                           Validators.required]);
      this.conPass = new FormControl('', [ Validators.minLength(8),
                                           Validators.required]);
  }

  createForm(){
    this.form = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      conPass: this.conPass
    });
  }


  prepareResponse(){
    this.regForm = new RegForm();
    this.regForm.email = this.email.value;
    this.regForm.name = this.name.value;
    this.regForm.username = this.email.value;
    this.regForm.password = this.password.value;
  }



  onClickRegister(){
    //TODO: Switch to event emitters to make this a dump component.
      this.prepareResponse();
      //  based on the response perform action.
      this.authService
          .registerUser(this.regForm)
          .subscribe(res => {
            if (res.hasOwnProperty('token')){
              this.isError = false;
              let jwt = {username: this.regForm.username, token: res.token};
              localStorage.setItem('currentUser', JSON.stringify(jwt));
              this.snackBar.open('Registered successfully', 'Dismiss', {
                duration: 3000
              });
              this.router.navigateByUrl('');
            }
            else if (res.hasOwnProperty('message')){
                this.errorMsg = res.message;
                this.isError = true;
            }
          });
    }
}
