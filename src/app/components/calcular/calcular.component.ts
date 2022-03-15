import { Component, EventEmitter, Output } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styles: [
  ]
})
export class CalcularComponent {

  num1:number = 0;
  num2:number = 0;
  resultado:string = "";

  @Output() resultadoEvent:EventEmitter<string> = new EventEmitter();

  sumar():void {
    this.resultado = String(this.num1 + " + " + this.num2 + " = " + (this.num1 + this.num2));
    this.resultadoEvent.emit(this.resultado);
  }

  restar():void {
    this.resultado = String(this.num1 + " - " + this.num2 + " = " + (this.num1 - this.num2));
    this.resultadoEvent.emit(this.resultado);
  }

  multiplicar():void {
    this.resultado = String(this.num1 + " x " + this.num2 + " = " + (this.num1 * this.num2));
    this.resultadoEvent.emit(this.resultado);
  }

  dividir():void {
    this.resultado = String(this.num1 + " / " + this.num2 + " = " + (this.num1 / this.num2));
    this.resultadoEvent.emit(this.resultado);
  }

  limpiar():void {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = "";
    this.resultadoEvent.emit(this.resultado);
  }

}
