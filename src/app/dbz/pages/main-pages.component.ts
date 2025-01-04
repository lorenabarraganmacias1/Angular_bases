import { Component } from '@angular/core';
import { character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {

  public character:character[] = [
  {
    name:'krilin',
    power: 1000,
  },{
    name:'goku',
    power:10000,
  },{
    name:'vegeta',
    power:7500
  }

  ] ;

  // ayuda aque el nuevo personaje pase al final de la fila
  onNewCharacter(character:character):void {

    this.character.push(character);

    // console.log('Mainpage');
    // console.log(character);


  }

  onDeleteCharacter(index:number){

    this.character.splice(index,1);

  }
}



//el ejemplo tienes que hacer
// logren hacer emision de un nuevo evento que se llama onDelete que va a emitir el indice
//
//en el main-page se va a recibir el evento, es decir, escuchar inDelete y lo conectas con su main-pages y hacer algo cuando reciba el onDeliteCharactes
// tienes que remover el elemento basado en ese indice
//
//
//
//
//
