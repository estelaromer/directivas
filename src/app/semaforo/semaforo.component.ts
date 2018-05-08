import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {
  activoRojo: boolean;
  activoAmbar: boolean;
  activoVerde: boolean;
  constructor() {
    this.activoRojo = true;
    this.activoAmbar = false;
    this.activoVerde = false;
  }

  cambiaColor(arrColores) {
    this.activoRojo = arrColores[0];
    this.activoAmbar = arrColores[1];
    this.activoVerde = arrColores[2];
  }

  ngOnInit() {
    setInterval(() => {
      if (this.activoRojo) {this.cambiaColor([false, true, false]); } else if
      (this.activoAmbar) {this.cambiaColor([false, false, true]); } else {
        this.cambiaColor([true, false, false]);
      }
    }, 1000);
  }

}
