import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
  ]
})
export class PrincipalComponent {

  resultado:string = "";

  resultadoCalculo(res:string) {
    this.resultado = res;
    //console.log("Padre: ", this.resultado);
  }

}
