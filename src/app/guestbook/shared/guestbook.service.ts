import { GuestBook } from './guestbook.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  public guestBook: GuestBook[] = [];

  public addNewEntry(guestBook: GuestBook): void {
    this.guestBook.push(guestBook);
  }
}
