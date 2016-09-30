import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component'
import { UsersAdminComponent } from './components/users-admin/users-admin.component'
import { StoriesAdminComponent } from './components/stories-admin/stories-admin.component'

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,   
    children: [
      {
        path: '',       
          children: [                           
          { path: 'admin/users', component: UsersAdminComponent },
          { path: 'admin/stories', component: StoriesAdminComponent }
        ]
      }
    ]
  }
];

export const adminRouting = RouterModule.forChild(adminRoutes);