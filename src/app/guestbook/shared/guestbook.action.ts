import { GuestBook } from './guestbook.model';
import { createAction, props } from '@ngrx/store';

export enum GuestBookType {
    GUESTBOOK_ADD_MESSAGE = '[GuestBook] Add Message'
}

export const addNewMessage = createAction(GuestBookType.GUESTBOOK_ADD_MESSAGE, props<{ guestBookMessage: GuestBook }>());
