import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoryModel } from '../../../shared/models/story.model'
import { StoryService } from '../../../shared/services/story.service'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  stories: Array<StoryModel> = [];

  constructor(private route: ActivatedRoute,
    private storyService: StoryService) { }

  ngOnInit() {
    console.log('Stories Comp');

    this.route.queryParams
      .map(params => params['tag'])
      .subscribe((tag) => {
        console.log('tag: ' + tag);
        if (tag) {
          this.storyService.getStoriesByTag(tag)
            .subscribe(story => {
              this.stories = story;
              console.log(this.stories);
            });

        } else {
          this.storyService.getStories()
            .subscribe(story => {
              this.stories = story;
              console.log('stories:' + this.stories);
            });
        }
      });
  }
}
