import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidenavAdminComponent } from './components/sidenav-admin/sidenav-admin.component';

import { adminRouting } from './admin.route';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { StoriesAdminComponent } from './components/stories-admin/stories-admin.component';
import { RegisterUserAdminComponent } from './components/register-user-admin/register-user-admin.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        adminRouting
    ],
    declarations: [
        SidenavAdminComponent,
        UsersAdminComponent,
        StoriesAdminComponent, 
        RegisterUserAdminComponent
    ],
    exports: [
        SidenavAdminComponent,
        UsersAdminComponent,
        StoriesAdminComponent
    ]
})
export class AdminModule { }
