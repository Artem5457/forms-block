import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export enum ControlName {
  EMAIL = 'email',
  PASSWORD = 'password',
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
      [ControlName.EMAIL]: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      [ControlName.PASSWORD]: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }
  );

  constructor() {
    
  }

  ngOnInit(): void {
      // this.form = new FormGroup({})
        // Validators.minLength(6)
        // this.form.controls[ControlName.EMAIL].addValidators); 
  }
  submit() {
    if (this.form?.valid) {
      console.log('Form: ', this.form);
      const formData = {
        ...this.form.value
      }
      console.log('Form data: ', formData);
    }
  }
}
