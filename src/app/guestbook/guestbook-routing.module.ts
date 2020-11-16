import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestbookComponent } from './guestbook.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GuestbookComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GuestbookRoutingModule { }
