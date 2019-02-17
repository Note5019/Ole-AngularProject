import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      lastName: ['']                              //แบบ ย่อ
    });
  }

}
