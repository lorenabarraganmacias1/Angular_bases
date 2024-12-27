import { Component, numberAttribute,  } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
  <h3> Counter: {{counter}}</h3>



  <button (click)="incrementar(1)">+1</button>
  <button (click)="reestablecer(10)">reset</button>
  <button (click)="disminuir(1)">-1</button>

  `
})





export class CounterComponent{

  public counter: number = 10





    incrementar(value:number):void {

      this.counter += value
    }
    disminuir (value:number):void {

      this.counter -= value
    }

    reestablecer (value:number):void {

      this.counter = value
    }



}
