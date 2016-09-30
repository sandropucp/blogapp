import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component'
import { StoriesComponent } from './components/stories/stories.component'
import { StoryComponent } from './components/story/story.component'

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,   
    children: [
      {
        path: '',       
        children: [
          { path: '', component: StoriesComponent  },                             
          { path: 'stories', component: StoriesComponent },
          { path: 'stories/:id', component: StoryComponent }
        ]
      }
    ]
  }
];

export const homeRouting = RouterModule.forChild(homeRoutes);