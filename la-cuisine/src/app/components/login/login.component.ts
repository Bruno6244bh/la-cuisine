import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})


export class LoginComponent {

  isVisible = this.loginService.isLoginVisible;

  constructor(public loginService: LoginService) {}
}
