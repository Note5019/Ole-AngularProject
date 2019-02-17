import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup:FormGroup;
  constructor(private fromBuild: FormBuilder) {
   }

  ngOnInit() {
    this.formGroup =  this.fromBuild.group({
      firstName: this.fromBuild.control(''),      //แบบ เต็ม
      lastName: [''],                              //แบบ ย่อ
      email: [''],                              //แบบ ย่อ
      age: ['']                              //แบบ ย่อ
    });
  }

  onSubmit(form:FormGroup){
    console.log(form);
    const {firstName, lastName, email, age} = form.value;
    console.log(firstName,lastName, email, age);
    const user = new User(firstName,lastName, email, age);
    console.log(user);
    
    
    
  }

}
