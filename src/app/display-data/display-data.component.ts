import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Student } from '../Models/Student';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent {
   @Input() studentData : Student[] = []
   @Output() editId = new EventEmitter<number>()
   @Output() deleteId = new EventEmitter<number>()


   data :any[] = []
    // change detection  lyfe sycle hook
   ngOnInit(){
    console.log(this.studentData)
    this.data = [...this.studentData]
   }

  ngOnChanges(changes : SimpleChanges) : void{
       for(let porpName in changes){
           if(changes.hasOwnProperty(porpName)){
            let change = changes[porpName]
            console.log(change.currentValue)
            if(change.isFirstChange()){
                console.log(change.firstChange)
            }
           }
       }
  }

  ngOndestroy(){

  }

   deleteStudent(ind : number){
    //  this.studentData.splice(ind,1)
    this.deleteId.emit(ind)
   }

   editStudent(ind : number){
      this.editId.emit(ind)
   }
}
