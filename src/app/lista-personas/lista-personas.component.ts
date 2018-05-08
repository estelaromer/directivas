import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  lista: any[];
  formulario: any;

  constructor() {
    this.lista = [
      {nombre: 'Rosa', apellidos: 'García', edad: 23, asignaturas: ['Matemáticas', 'Física']},
      { nombre: 'Ramón', apellidos: 'Barca', edad: 21, asignaturas: ['Matemáticas', 'Tecnología']},
      { nombre: 'Luisa', apellidos: 'Marcos', edad: 30, asignaturas: ['Ciencias', 'Física']},
      { nombre: 'Sara', apellidos: 'Luengo', edad: 19, asignaturas: ['Lengua', 'Inglés']}
    ];

    this.formulario = {
      nombre: '',
      apellidos: '',
      edad: ''
    };
  }

  handleClick() {
    this.lista.push({
      nombre: this.formulario.nombre,
      apellidos: this.formulario.apellidos,
      edad: this.formulario.edad
    });
  }

  ngOnInit() {
  }

}
