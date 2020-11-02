import { Component } from '@angular/core';
import { GuestbookModalComponent } from '../guestbook-modal/guestbook-modal.component';
import { GuestbookService } from '../shared/guestbook.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-guestbook-display-posts',
  templateUrl: './guestbook-display-posts.component.html',
  styleUrls: ['./guestbook-display-posts.component.scss']
})
export class GuestbookDisplayPostsComponent {
  public guestBookPosts = this.gs.guestBook;

  constructor(public gs: GuestbookService, private dialog: MatDialog) { }

  openModal(authorName: string) {
    console.log('authorName = ', authorName);
    const dialogRef = this.dialog.open(GuestbookModalComponent,
      {
        width: '350px',
        data: {
          name: authorName
        },
        disableClose: true
      });
  }
}
