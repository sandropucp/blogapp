import { Component, OnInit } from '@angular/core';

import { UserModel } from '../../../shared/models/user.model'
import { UserService } from '../../../shared/services/user.service'

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {
  users: Array<UserModel> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('Users Admin Comp');

     this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      });
  }
}
