import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { CalcularComponent } from './calcular/calcular.component';
import { MostrarResultadoComponent } from './mostrar-resultado/mostrar-resultado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    CalcularComponent,
    MostrarResultadoComponent
  ],
  exports: [
    PrincipalComponent,
    CalcularComponent,
    MostrarResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CalculadoraModule { }
