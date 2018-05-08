import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarComponente: boolean;

  constructor() {
    this.mostrarComponente = true;
  }

  handleClick() {
    this.mostrarComponente = !this.mostrarComponente;
  }
}
