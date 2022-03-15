import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-resultado',
  templateUrl: './mostrar-resultado.component.html',
  styles: [
  ]
})
export class MostrarResultadoComponent {

  @Input() resultado:string = "";

}
