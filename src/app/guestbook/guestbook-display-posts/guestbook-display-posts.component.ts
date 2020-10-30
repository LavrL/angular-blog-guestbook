import { Component, OnInit } from '@angular/core';
import { GuestbookService } from '../shared/guestbook.service';

@Component({
  selector: 'app-guestbook-display-posts',
  templateUrl: './guestbook-display-posts.component.html',
  styleUrls: ['./guestbook-display-posts.component.scss']
})
export class GuestbookDisplayPostsComponent {
  public guestBookPosts = this.gs.guestBook;

  constructor(public gs: GuestbookService) { }
}
