import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'drink-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header {
  isAuthorized: Boolean = false;
  userName: String = '';
  title: String = 'Drink100gram - connecting people';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.updateAuthorizationStatus();
  }

  updateAuthorizationStatus() {
    this.isAuthorized = this.authService.isAuthorized();
    this.userName = this.isAuthorized ? this.authService.getUserName() : '';
  }

  logOut() {
    this.authService.unAuthorize();
    this.updateAuthorizationStatus();
  }

  openAuthorizeForm() {
    console.log('no form yet');
  }
}
