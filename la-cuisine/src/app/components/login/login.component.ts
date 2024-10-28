import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})


export class LoginComponent implements OnInit {

  overlay: HTMLElement | null = null;
  panel: HTMLElement | null = null;
  signIn: HTMLElement | null = null;
  signUp: HTMLElement | null = null;

  ngOnInit(): void {
    this.overlay = document.querySelector(".overlay")
    this.panel = document.querySelector(".panel");
    this.signIn = document.querySelector(".signIn");
    this.signUp = document.querySelector(".signUp");
  }


  toggleVisibility(): void {
    if (this.overlay) {
      this.overlay.classList.toggle("none")
    }
  }


  toggleClass(): void {
    if (this.panel && this.signIn && this.signUp) {
      this.panel.classList.toggle("togglepanel"); 
      this.signIn.classList.toggle("hide");
      this.signUp.classList.toggle("hide");
    }
  }
}
