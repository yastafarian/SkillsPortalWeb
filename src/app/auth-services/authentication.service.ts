import { Injectable } from '@angular/core';
import { RegForm } from '../models/reg-form'
import { LoginForm} from "../models/login-form";

import { AuthApiService } from '../api-services/auth-api.service'
import { Observable } from 'rxjs/Observable';
import {Person} from "../models/person";

@Injectable()
export class AuthenticationService {

  constructor(
    private api: AuthApiService
  ) { }

  registerUser(user: RegForm){
    return this.api.register(user);
  }

  loginUser(user: LoginForm) {
    return this.api.login(user);
  }

}
