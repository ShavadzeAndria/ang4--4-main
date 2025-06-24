import { Component } from '@angular/core';
import { Student } from '../Models/Student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DisplayDataComponent } from "../display-data/display-data.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule, DisplayDataComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  student: Student = {
    name: '',
    age: null,
    grade: '',
    subjects: '',
    isEnrolled: false,
    address: {
      street: '',
      city: '',
      zip: ''
    }
  };
  forDisplayStudent?: Student
  studentArr: Student[] =[]


  resetStudent(){
    this.student.name = ""
    this.student.age = null
    this.student.grade = ""
    this.student.subjects = ""
    this.student.isEnrolled = false
    this.student.address.street = ""
    this.student.address.city = ""
    this.student.address.zip = ""
  }

  submit(){
    this.forDisplayStudent = {
      name:  this.student.name,
      age:  this.student.age,
      grade: this.student.grade,
      subjects:  this.student.subjects,
      isEnrolled:  this.student.isEnrolled,
      address: {
        street: this.student.address.street,
        city:  this.student.address.city,
        zip: this.student.address.zip
      }
    }

    this.studentArr.push(this.forDisplayStudent)
    this.resetStudent()
    console.log(this.studentArr)
  }

  delete(index:number){
   console.log(index)
   this.studentArr.splice(index,1)
  }
  edit(index:number){
    this.student.name = this.studentArr[index].name
    this.student.age = this.studentArr[index].age
    this.student.grade = this.studentArr[index].grade
    this.student.subjects = this.studentArr[index].subjects
    this.student.isEnrolled = this.studentArr[index].isEnrolled
    this.student.address.street = this.studentArr[index].address.street
    this.student.address.city = this.studentArr[index].address.city
    this.student.address.zip = this.studentArr[index].address.zip
    this.delete(index)
  }


  editStudent(ind : number){
         console.log(ind)
         this.edit(ind)
  }

  deleteStudent(ind : number){
    this.delete(ind)
  }
  showUsersTable = false;

users = [
  { name: 'Ana', age: 25, email: 'ana@example.com' },
  { name: 'Giorgi', age: 30, email: 'giorgi@example.com' },
];

}
