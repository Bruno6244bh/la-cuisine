// login.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  isLoginVisible = signal(false); // Define o estado como Signal

  toggleLoginVisibility() {
    this.isLoginVisible.update((visible) => !visible); // Alterna o estado
  }
}
