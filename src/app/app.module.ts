import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DirectivasAtributoComponent } from './directivas-atributo/directivas-atributo.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { EligeLaPuertaComponent } from './elige-la-puerta/elige-la-puerta.component';
import { ColorDirective } from './color.directive';


@NgModule({
  declarations: [
    AppComponent,
    DirectivasAtributoComponent,
    SemaforoComponent,
    ListaPersonasComponent,
    EligeLaPuertaComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
