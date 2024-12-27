import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[] = [' spiderman', ' she hulk', ' thor',' ironman',' DR.string'];
  public deletedHero?: string;


  removeLasHero(){
    this.deletedHero = this.heroNames.pop();


  }

}
