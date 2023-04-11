import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, this.valid]),
    password: new FormControl('', [Validators.required, this.valid]),
  });
  error: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    if (form.value.userName === 'admin' && form.value.password === 'admin') {
      this.router.navigateByUrl('home');
    } else {
      this.error = true;
    }
  }

  valid(control: FormControl) {
    if (control.value != null && control.value !== 'admin') {
      return { errorMessage: true };
    }
    return null;
  }
}
