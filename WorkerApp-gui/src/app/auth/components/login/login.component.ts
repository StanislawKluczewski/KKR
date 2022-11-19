import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedUser = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required, this.checkAppropriateField]),
    password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) { }

  login(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {

  }

  checkAppropriateField(formControl: FormControl) {
    if (formControl.value == '' && formControl.value.indexOf('') != -1) {
      return { badInputValue: true }
    }
    return null;
  }
}
