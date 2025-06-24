import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
   greeting : string= "Hello";
   
   firstName? :string
   lastName? : string
   sayUserName(){
      console.log(this.firstName)
   }


   sayUserLastName(){
      console.log(this.lastName)
   }

  //  two way binding სჭირდება FormsModule ის დაიმპორტება




  //  isValid = true
  //  greet:number | string | null | boolean | undefined | object;
  //  x : any
  //  age? :number

  //  number = [20, "hghg"]

  // sayHello(){
  //   this.x = []
  //   console.log(this.x)
  // }

}



