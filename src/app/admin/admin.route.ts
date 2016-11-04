import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component'
import { UsersAdminComponent } from './components/users-admin/users-admin.component'
import { UserAdminComponent } from './components/user-admin/user-admin.component'

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,   
    children: [
      {
        path: '',       
          children: [                           
          { path: 'admin/users', component: UsersAdminComponent },
          { path: 'admin/users/:id', component: UserAdminComponent }                 
        ]
      }
    ]
  }
];

export const adminRouting = RouterModule.forChild(adminRoutes);