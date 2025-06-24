import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() student! : Student
  @Input() index! : number
 
  @Output() deleteId = new EventEmitter<number>()
  @Output() editId = new EventEmitter<number>()


  delete(ind : number){
    this.deleteId.emit(ind)
  }


  edit(ind : number){
    this.editId.emit(ind)
  }

}
