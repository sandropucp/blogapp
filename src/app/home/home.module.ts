import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SidenavStoriesComponent } from './components/sidenav-stories/sidenav-stories.component';
import { SidenavTagsComponent } from './components/sidenav-tags/sidenav-tags.component';
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
        SidenavStoriesComponent,
        SidenavTagsComponent,
        StoriesComponent,
        StoryComponent
    ],
    exports: [
        SidenavStoriesComponent,
        SidenavTagsComponent,
        StoriesComponent,
        StoryComponent
    ]
})
export class HomeModule { }
