import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestbookComponent } from './guestbook.component';
import { GuestbookDisplayPostsComponent } from './guestbook-display-posts/guestbook-display-posts.component';
import { GuestbookModalComponent } from './guestbook-modal/guestbook-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    GuestbookComponent,
    GuestbookDisplayPostsComponent,
    GuestbookModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    GuestbookComponent
  ]
})
export class GuestbookModule { }
