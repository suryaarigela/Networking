import { Component, OnInit } from '@angular/core';
import { Posts } from '../../../../model/posts';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  post:Posts;
  constructor() { }

  ngOnInit(): void {
    this.post={
      userName:'surya',
      userId:'1',
      content:'Welcome to my networking siteImagine a succkly winning picks with you? Well.. with Bullseye Trades you get 1 single trade, ONCE a week — because Im aiming for 100%. To be clear... every single week before the market opens on Monday you get to piadvantage & now its your turn',
      id:'123',
      title:'Welcome',
      imgUrl:'url',
      likes:2,
      dislikes:3,
      commentsNr:2,
      comments:['hi','how are you']
    }
  }

}
