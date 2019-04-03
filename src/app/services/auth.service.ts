import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  isAuthorized() {
    return !!window.localStorage.user;
  }

  authorize(userName: string) {
    window.localStorage.user = userName;
  }

  unAuthorize() {
    window.localStorage.user = '';
  }

  getUserName() {
    return window.localStorage.user;
  }

}