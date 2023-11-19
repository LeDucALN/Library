import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/type';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Input() user!: User;
  showContent = false;
  constructor(
    private route: Router,
    private authSerivce: AuthenticationService
  ) {}
  onSm() {
    console.log('submit');
    this.user.status = true;
    this.authSerivce.login(this.user);
  }
}
