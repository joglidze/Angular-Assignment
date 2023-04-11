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
    if (form.status == 'INVALID') {
      this.error = true;
    } else {
      this.error = false;
      this.router.navigateByUrl('home');
    }
    console.log(form);
    this.error = form.status === 'INVALID' ? true : false;
  }

  valid(control: FormControl) {
    if (control.value != null && control.value !== 'admin') {
      return { errorMessage: true };
    }
    return null;
  }
}
