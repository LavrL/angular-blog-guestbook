import { Component } from '@angular/core';
import { GuestBook } from '../shared/guestbook.model';
import { GuestbookModalComponent } from '../guestbook-modal/guestbook-modal.component';
import { GuestbookService } from '../shared/guestbook.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectGuestBookMessages } from '../shared/guestbook.selector';

@Component({
  selector: 'app-guestbook-display-posts',
  templateUrl: './guestbook-display-posts.component.html',
  styleUrls: ['./guestbook-display-posts.component.scss']
})
export class GuestbookDisplayPostsComponent {
  public guestBookPosts$: Observable<GuestBook[]> = this.store.pipe(select(selectGuestBookMessages));

  constructor(public gs: GuestbookService, private dialog: MatDialog, private store: Store<GuestBook>) { }

  public openModal(authorName: string): void {
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
