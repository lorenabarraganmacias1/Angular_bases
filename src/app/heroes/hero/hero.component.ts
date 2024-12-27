import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string ="ironman";
  public age : number = 45;


  // get CapitalizedName():string{

  //   return "hola mundo".toUpperCase();
  // }
  get CapitalizedName():string{

    return this.name.toUpperCase();
  }


  getHeroDescrition():string{


    return `${this.name}-${this.age}`
  }

  changeHero():void{

    this.name = "juancho rois"

  }

  changeAge():void {


    this.age = 30;

  }
  resetForm():void {


    this.age = 45;
    this.name = "ironman"

  }


}
