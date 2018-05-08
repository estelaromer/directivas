import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-atributo',
  templateUrl: './directivas-atributo.component.html',
  styleUrls: ['./directivas-atributo.component.css']
})
export class DirectivasAtributoComponent implements OnInit {

  pStyles: any;
  mouseChange: boolean;
  constructor() {
    this.pStyles = {
      backgroundColor: 'orchid',
      fontSize: '24px'
    };
    this.mouseChange = true;
  }
  cambiaFondo(pColor) {
    this.pStyles.backgroundColor = pColor;
  }

  onMouse(pValor) {
    this.mouseChange = pValor;
  }

  ngOnInit() {
  }

}
