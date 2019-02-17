import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Output() change = new EventEmitter();
  constructor(private fromBuild: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fromBuild.group({
      // firstName: this.fromBuild.control(),      //แบบ เต็ม
      firstName: ['', [Validators.required, Validators.minLength(2)]],      //แบบ เต็ม
      lastName: ['', [Validators.required, Validators.minLength(2)]],                              //แบบ ย่อ
      email: ['', [Validators.email]], //this.EmailValidator                              //แบบ ย่อ
      age: ['22',[Validators.min(0),Validators.max(99)]]                              //แบบ ย่อ
    });
  }
  EmailValidator(control: AbstractControl) {
    const value = control.value;
    if(value && value.includes('@')){
      return null;
    }
    return {
      email: true
      // email: {
      //   acturl: value,
      //   example: 'exampla@gmail.com'
      // }
    }
  }
  onSubmit(form: FormGroup) {
    // console.log(form.valid,form.invalid);
    console.log('errors',(<FormControl>form.get('firstName')).errors);

    // console.log(form);

    if (form.valid) {
      const { firstName, lastName, email, age } = form.value;
      // console.log(firstName,lastName, email, age);
      const user = new User(firstName, lastName, email, age);
      // console.log(user);
      this.change.emit(user);
    }
    else {
      ['firstName', 'lastName', 'email', 'age'].forEach((key: string) => {
        console.log('key',form.get(key).touched);
        console.log('key',form.get(key).errors);
        form.get(key).markAsTouched();
        console.log('key',form.get(key).touched);
      });
    }


  }

}
