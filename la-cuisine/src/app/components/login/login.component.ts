import { Component, AfterViewInit, ElementRef, signal, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})


export class LoginComponent implements AfterViewInit {

  texts = {
    heading: 'Novo por Aqui ?',
    paragraph: 'Cadastre-se para gerenciar suas reservas, simples e rápido',
    button: 'Cadastre-se'
  };

  buttonClicked = signal(false);

  @ViewChild('panelRef') panel!: ElementRef;
  @ViewChild('signInRef') signIn!: ElementRef;
  @ViewChild('signUpRef') signUp!: ElementRef;
  @ViewChild('panelH2Ref') panelH2!: ElementRef;
  @ViewChild('panelPRef') panelP!: ElementRef;
  @ViewChild('panelButtonRef') panelButton!: ElementRef;


  ngAfterViewInit(): void {
    // Aqui você pode acessar os elementos DOM diretamente
    console.log(this.panel.nativeElement); // Acesso ao elemento do painel
    console.log(this.signIn.nativeElement); // Acesso ao elemento de login
    console.log(this.signUp.nativeElement); // Acesso ao elemento de cadastro
    console.log(this.panelH2.nativeElement); // Acesso ao elemento do painel
    console.log(this.panelP.nativeElement); // Acesso ao elemento de login
    console.log(this.panelButton.nativeElement); // Acesso ao elemento de cadastro

  }

  click() {
    this.buttonClicked.set(true);
    if (this.panel && this.signIn && this.signUp) {
      this.panel.nativeElement.classList.toggle("togglepanel"); 
      this.signIn.nativeElement.classList.toggle("hide");
      this.signUp.nativeElement.classList.toggle("hide");

      if (this.texts.heading === 'Novo por Aqui ?') {
        this.texts.heading = 'Já tem uma conta ?';
        this.texts.paragraph = 'Entre para gerenciar suas reservas, ou avaliar sua visita';
        this.texts.button = 'Entrar';
      } else {
        this.texts.heading = 'Novo por Aqui ?';
        this.texts.paragraph = 'Cadastre-se para gerenciar suas reservas, simples e rápido';
        this.texts.button = 'Cadastre-se';
      }
    }
  }

  isVisible = this.loginService.isLoginVisible;

  constructor(public loginService: LoginService) {}

}