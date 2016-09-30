import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SidenavAdminComponent } from './components/sidenav-admin/sidenav-admin.component';

import { adminRouting } from './admin.route';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { StoriesAdminComponent } from './components/stories-admin/stories-admin.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        adminRouting
    ],
    declarations: [
        SidenavAdminComponent,
        UsersAdminComponent,
        StoriesAdminComponent
    ],
    exports: [
        SidenavAdminComponent,
        UsersAdminComponent,
        StoriesAdminComponent
    ]
})
export class AdminModule { }
