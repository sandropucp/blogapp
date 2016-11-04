import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserModel } from '../../../shared/models/user.model'
import { UserService } from '../../../shared/services/user.service'

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  user: UserModel;
  userId: string;

  updateFailed: boolean;
  nameCtrl: FormControl;
  birthYearCtrl: FormControl;
  userForm: FormGroup;

  static validYear(control: FormControl) {
    const birthYear = control.value;
    return Number.isNaN(birthYear) ||
      birthYear < 1900 ||
      birthYear > new Date().getFullYear() ? { invalidYear: true } : null;
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    debugger;

    this.nameCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.birthYearCtrl = this.fb.control('', Validators.compose([
      Validators.required,
      UserAdminComponent.validYear
    ]));
    this.userForm = this.fb.group({
      name: this.nameCtrl,
      birthYear: this.birthYearCtrl
    });

    this.userService.getUser(id)
      .subscribe(user => {
        debugger;
        this.user = user;
        this.nameCtrl.setValue(this.user.name);
        this.birthYearCtrl.setValue(this.user.birthYear);

      });
  }

  update() {
    const id = this.route.snapshot.params['id'];

    this.userService.updateUser(
      id,
      this.userForm.value.name,
      this.userForm.value.birthYear
    ).subscribe(
      () => this.router.navigate(['/admin/users']),
      () => this.updateFailed = true
      );
  }

}
