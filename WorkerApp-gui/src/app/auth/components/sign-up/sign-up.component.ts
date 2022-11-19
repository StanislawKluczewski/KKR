import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpUser = new FormGroup({
    name: new FormControl('', [Validators.required, this.checkAppropriateField]),
    surname: new FormControl('', [Validators.required, this.checkAppropriateField]),
    email: new FormControl('', [Validators.email, this.checkAppropriateField]),
    password: new FormControl('', [Validators.required, this.checkAppropriateField]),
  })
  constructor(private authService: AuthService, private router: Router) { }

  signUp(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this.authService.signIn(form.value)
      .subscribe(result => {
        console.log(result);
        this.router.navigateByUrl('/login');
      });

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
