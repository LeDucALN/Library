import { Injectable } from '@angular/core';
import { User } from '../type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private router: Router) {}

  private isLogin = false;

  login(user: User) {
    if (user.username === 'admin' && user.password === '123123') {
      this.isLogin = true;
      this.router.navigate(['/home']);
    }
  }

  isUserLoggedIn() {
    return this.isLogin;
  }
}
