/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoriesService } from './stories.service';

describe('Service: Stories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoriesService]
    });
  });

  it('should ...', inject([StoriesService], (service: StoriesService) => {
    expect(service).toBeTruthy();
  }));
});
