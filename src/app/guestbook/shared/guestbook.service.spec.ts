import { GuestBook } from './guestbook.model';
import { GuestbookService } from './guestbook.service';
import { TestBed } from '@angular/core/testing';

describe('BlogService', () => {
    let service: GuestbookService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GuestbookService]

        })
        service = TestBed.inject(GuestbookService);
    });

    it('should add new entry', () => {
        const newMessage: GuestBook = {
            author: 'Jack',
            message: 'Some text goes here.'
        };

        service.addNewEntry(newMessage);
        expect(service.guestBook.length).toEqual(1);
    });
})