import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // Remova o AppComponent daqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent // Importe o AppComponent aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
