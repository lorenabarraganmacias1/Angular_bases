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
    power:3000,
    }
  ] ;



}
