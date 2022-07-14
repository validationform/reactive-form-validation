import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reactiveform';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+$'),
        Validators.maxLength(2),
      ]),
    });
  }
  loginUser() {
    console.log(this.loginForm.value);
  }
  get user() {
    return this.loginForm.get('user');
  }
  get phone() {
    return this.loginForm.get('phone');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get age() {
    return this.loginForm.get('age');
  }
}
