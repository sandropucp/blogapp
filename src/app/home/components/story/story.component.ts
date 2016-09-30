import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoryModel } from '../../../shared/models/story.model'
import { StoriesService } from '../../../shared/services/stories.service'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story: StoryModel;

  constructor(private route: ActivatedRoute, 
    private storiesService: StoriesService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id']; 
      console.info(id);
      this.storiesService.getStory(id)
        .subscribe(story => {
          this.story = story;
          console.log(this.story);
        });
    });
  }
}
