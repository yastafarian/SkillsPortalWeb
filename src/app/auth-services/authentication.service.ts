import { Injectable } from '@angular/core';
import { RegForm } from '../models/reg-form'

import { AuthApiService } from '../api-services/auth-api.service'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(
    private api: AuthApiService
  ) { }

  registerUser(user: RegForm){
    return this.api.register(user);
  }

}
