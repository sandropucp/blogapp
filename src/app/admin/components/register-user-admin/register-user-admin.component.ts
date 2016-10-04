import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-register-user-admin',
  templateUrl: './register-user-admin.component.html',
  styleUrls: ['./register-user-admin.component.css']
})
export class RegisterUserAdminComponent implements OnInit {

  registrationFailed: boolean;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  birthYearCtrl: FormControl;
  userForm: FormGroup;
  passwordForm: FormGroup;

  static passwordMatch(control: FormGroup) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return password !== confirmPassword ? {matchingError: true} : null;
  }

  static validYear(control: FormControl) {
    const birthYear = control.value;
    return Number.isNaN(birthYear) ||
    birthYear < 1900 ||
    birthYear > new Date().getFullYear() ? {invalidYear: true} : null;
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.loginCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.passwordCtrl = this.fb.control('', Validators.required);
    this.confirmPasswordCtrl = this.fb.control('', Validators.required);
    this.passwordForm = this.fb.group({
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    }, {
      validator: RegisterUserAdminComponent.passwordMatch
    });
    this.birthYearCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      RegisterUserAdminComponent.validYear
    ]));
    this.userForm = this.fb.group({
      login: this.loginCtrl,
      passwordForm: this.passwordForm,
      birthYear: this.birthYearCtrl
    });
  }

  register() {
    this.userService.register(
      this.userForm.value.login,
      this.userForm.value.passwordForm.password,
      this.userForm.value.birthYear
    ).subscribe(
      () => this.router.navigate(['/']),
      () => this.registrationFailed = true
    );
  }
}
