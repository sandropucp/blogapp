import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoryModel } from '../../../shared/models/story.model'
import { StoryService } from '../../../shared/services/story.service'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story: StoryModel;

  constructor(private route: ActivatedRoute, 
    private storyService: StoryService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id']; 
      console.info(id);
      this.storyService.getStory(id)
        .subscribe(story => {
          this.story = story;
          console.log(this.story);
        });
    });
  }
}
