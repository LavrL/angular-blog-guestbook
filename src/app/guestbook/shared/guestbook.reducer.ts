import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { GuestBook } from './guestbook.model';
import { addNewMessage } from './guestbook.action';

export interface GuestBookState {
    guestBookMessages: GuestBook[]
}

const initialState: GuestBookState = {
    guestBookMessages: []
}

const _guestBookReducer = createReducer(
    initialState,
    on(addNewMessage, (state, action) => ({
        ...state, guestBookMessages: [...state.guestBookMessages, action.guestBookMessage]
    }))
);
export function guestBookReducer(state = initialState, action: Action) {
    return _guestBookReducer(state, action);
}

export const GUESTBOOK_FEATURE_KEY = 'guestBook';
export const getFeatureState = createFeatureSelector<GuestBookState>(GUESTBOOK_FEATURE_KEY);