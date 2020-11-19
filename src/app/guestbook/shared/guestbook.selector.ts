import { GuestBook } from 'src/app/guestbook/shared/guestbook.model';
import { createSelector } from '@ngrx/store';
import { getFeatureState, GuestBookState } from './guestbook.reducer';

export const selectGuestBookMessages = createSelector(
    getFeatureState,
    (state: GuestBookState) => state.guestBookMessages);
