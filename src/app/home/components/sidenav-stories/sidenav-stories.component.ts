import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoryModel } from '../../../shared/models/story.model'
import { StoryService } from '../../../shared/services/story.service'

@Component({
  selector: 'app-sidenav-stories',
  templateUrl: './sidenav-stories.component.html',
  styleUrls: ['./sidenav-stories.component.css']
})
export class SidenavStoriesComponent implements OnInit {
  stories: Array<StoryModel> = [];

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit() {
    this.storyService.getStories()
      .subscribe(stories => {
        this.stories = stories;
        console.log(this.stories);
      });
  }
}
