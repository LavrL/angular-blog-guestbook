import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestbookComponent } from './guestbook.component';
import { GuestbookDisplayPostsComponent } from './guestbook-display-posts/guestbook-display-posts.component';
import { GuestbookModalComponent } from './guestbook-modal/guestbook-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: GuestbookComponent
  }
];

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
    RouterModule.forChild(routes)
  ],
  exports: [
    GuestbookComponent
  ]
})
export class GuestbookModule { }
