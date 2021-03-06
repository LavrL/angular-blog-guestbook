import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestbookComponent } from './guestbook.component';
import { GuestbookDisplayPostsComponent } from './guestbook-display-posts/guestbook-display-posts.component';
import { GuestbookModalComponent } from './guestbook-modal/guestbook-modal.component';
import { GuestbookRoutingModule } from './guestbook-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { guestBookReducer } from './shared/guestbook.reducer';

@NgModule({
  declarations: [
    GuestbookComponent,
    GuestbookDisplayPostsComponent,
    GuestbookModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    GuestbookRoutingModule,
    StoreModule.forFeature('guestBook', guestBookReducer),
  ],
  exports: [
    GuestbookComponent
  ]
})
export class GuestbookModule { }
