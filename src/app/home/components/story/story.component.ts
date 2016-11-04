import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StoryModel } from '../../../shared/models/story.model'
import { StoryService } from '../../../shared/services/story.service'
import { UserService } from '../../../shared/services/user.service';

import { UserModel } from '../../../shared/models/user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story: StoryModel;
  storyId: string;

  registrationFailed: boolean;
  bodyCtrl: FormControl;
  commentForm: FormGroup;

  user: UserModel;
  userEventsSubscription: Subscription;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private storyService: StoryService, private userService: UserService) { }

  ngOnInit() {
    console.info('StoryComponent');
    this.route.params.forEach((params: Params) => {
      this.storyId = params['id'];
      console.info(this.storyId);
      this.storyService.getStory(this.storyId)
        .subscribe(story => {
          this.story = story;
          console.log(this.story);
        });
    });


    this.userEventsSubscription = this.userService.userEvents
      .subscribe(user => {
        this.user = user;
      });


    this.bodyCtrl = this.fb.control('', Validators.required);
    this.commentForm = this.fb.group({
      body: this.bodyCtrl
    });
  }

//storyid, body, author
   addComment() {
    this.storyService.addComment(this.storyId,
      this.commentForm.value.body, this.user._id)     
    .subscribe(
      (story) => this.story = story,
      () => this.registrationFailed = true
    );
  }
}
