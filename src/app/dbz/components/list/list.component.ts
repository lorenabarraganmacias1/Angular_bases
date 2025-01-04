import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList:character[] = [{
    name:'trunk',
    power:10
  }
  ]

  // onDeleteId =index value:numero
  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index:number ):void{


  this.onDelete.emit(index);
  }

}
