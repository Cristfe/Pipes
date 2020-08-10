import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }