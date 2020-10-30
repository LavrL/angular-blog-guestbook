import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestbookComponent } from './guestbook.component';
import { MatButtonModule } from '@angular/material/button';
import { GuestbookDisplayPostsComponent } from './guestbook-display-posts/guestbook-display-posts.component';

@NgModule({
  declarations: [
    GuestbookComponent,
    GuestbookDisplayPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    GuestbookComponent
  ]
})
export class GuestbookModule { }
