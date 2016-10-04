import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { StoryModel } from '../models/story.model';

const BASE_URL = 'https://blogapi-express.herokuapp.com/api/';

@Injectable()
export class StoryService {

  constructor(private http: Http) { }
  
  getStories():Observable<Array<StoryModel>>{
    return this.http.get(`${BASE_URL}stories`)
      .map(res => <Array<StoryModel>>res.json());
  }

  getStoriesByTag(tag:string):Observable<Array<StoryModel>>{
    return this.http.get(`${BASE_URL}stories?tag=${tag}`)
      .map(res => <Array<StoryModel>>res.json());
  }

  getStory(id:string):Observable<StoryModel>{
    return this.http.get(`${BASE_URL}stories/${id}`)
      .map(res => <StoryModel>res.json());
  }
}
