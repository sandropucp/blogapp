import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoryComponent } from './components/story/story.component';

import { homeRouting } from './home.route';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        homeRouting
    ],
    declarations: [       
        SidenavComponent,
        StoriesComponent,
        StoryComponent
    ],
    exports: [        
        SidenavComponent,
        StoriesComponent,
        StoryComponent
    ]
})
export class HomeModule { }
