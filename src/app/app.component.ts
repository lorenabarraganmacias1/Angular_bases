import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})





export class AppComponent {
  public title = 'counter';
  public counter: number = 10;


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
