import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { LoginService } from '../login/login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private loginService: LoginService) {}

  onLoginClick() {
    this.loginService.toggleLoginVisibility();
  }
}
