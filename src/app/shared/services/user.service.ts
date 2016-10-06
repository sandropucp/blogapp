import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { UserModel } from '../models/user.model';

const BASE_URL = 'https://blogapi-express.herokuapp.com/api/';

@Injectable()
export class UserService {

  public userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(private http: Http) {
    this.retrieveUser();
  }

  getUsers(): Observable<Array<UserModel>> {
    return this.http.get(`${BASE_URL}users`)
      .map(res => <Array<UserModel>>res.json());
  }

  register(name, email, password, birthYear): Observable<UserModel> {
    const body = { name, email, password, birthYear };
    return this.http.post(`${BASE_URL}users`, body)
      .map(res => res.json());
  }

  authenticate(email, password): Observable<UserModel> {    
    const body = { email, password };    
    return this.http
      .post(`${BASE_URL}users/authentication`, body)
      .map(res => res.json())
      .do(user => this.storeLoggedInUser(user));
  }

  storeLoggedInUser(user) {    
    window.localStorage.setItem('rememberMe', JSON.stringify(user));
    this.userEvents.next(user);
  }

  retrieveUser() {    
    const value = window.localStorage.getItem('rememberMe');
    if (value) {
      const user = JSON.parse(value);
      this.userEvents.next(user);
    }
  }

  logout() {
    this.userEvents.next(null);
    window.localStorage.removeItem('rememberMe');
  }
}
