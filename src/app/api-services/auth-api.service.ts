import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { RegForm } from '../models/reg-form';
import { LoginForm} from "../models/login-form";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Person} from "../models/person";

const API_URL = environment.apiUrl;

@Injectable()
export class AuthApiService {

  constructor(
    private http: Http
  ) { }

  // POST /register
  register(form: RegForm): Observable<any> {
    return this.http
    .post(API_URL + '/register', form)
    .map(response => {
      return response.json();
    }).catch(this.handleError);
  }

  // POST /login
  login(form: LoginForm): Observable<any> {
    return this.http
      .post(API_URL + '/login', form)
      .map(response => {
        return response.json();
      }).catch(this.handleError);
  }

  handleError (error: Response | any) {
    console.error('AuthApiService::handleError', error);
    return Observable.throw(error);
  }

}
