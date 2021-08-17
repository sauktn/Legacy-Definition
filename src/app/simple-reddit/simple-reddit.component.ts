import { Component, OnInit } from '@angular/core';
import { RedditService } from '../services/reddit.service';

@Component({
  selector: 'app-simple-reddit',
  templateUrl: './simple-reddit.component.html',
  styleUrls: ['./simple-reddit.component.scss']
})
export class SimpleRedditComponent implements OnInit {
    constructor(private redditSer: RedditService) { }

    ngOnInit(): void {
    }

    submitMethod(refForm: any) {
     console.log(refForm);
     this.redditSer.addValueLinkFrom(refForm.form.value);
    }
}
