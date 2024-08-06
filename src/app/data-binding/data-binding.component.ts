import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, date

  courseName: string = "Angular 18";
  stateName: string = "Ontario";
  inputType = "radio";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  isCanadian: boolean = false;
  currentDate: Date = new Date();

  firstName = signal("Aakash Kainth");

  constructor() {
  }
  changeCourseName() {
    this.courseName = "React JS";
    this.firstName.set("Virat Kohli");
  }
  showAlert(message: string) {
    alert(message);
  }

}
