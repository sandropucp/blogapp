import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidenavAdminComponent } from './components/sidenav-admin/sidenav-admin.component';

import { adminRouting } from './admin.route';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        adminRouting
    ],
    declarations: [
        SidenavAdminComponent,
        UsersAdminComponent, UserAdminComponent        
    ],
    exports: [
        SidenavAdminComponent,
        UsersAdminComponent        
    ]
})
export class AdminModule { }
