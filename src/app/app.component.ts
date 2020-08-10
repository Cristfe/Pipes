import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  precio: number;
  currentDate: Date;
  numero: number;
  numAleatorio: number;
  palabras: string[];

  minValue: number;
  maxValue: number;

  constructor() {
    this.precio = 135.897;
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
    this.numero = 1233.9928190991
    this.numAleatorio = Math.random();
    this.palabras = ['leyes', 'suavecito', 'tinaja', 'guagua'];
    this.minValue = 1;
  }
}
