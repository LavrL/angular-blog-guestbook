import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogPost, BlogComment } from './blog.model';
import { BlogService } from './blog.service';

describe('BlogService', () => {
    let service: BlogService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BlogService]

        })

        service = TestBed.inject(BlogService);;
        httpMock = TestBed.inject(HttpTestingController);

    });

    afterEach(() => {
        httpMock.verify();
    })

    describe('Service is truthy', () => {
        it('should return an Observable<BlogPost[]>', () => {
            const dummyPosts: BlogPost[] = [{
                id: '1',
                title: 'Dog',
                author: 'John',
                imgURL: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                imgAlt: 'Dog\'s picture',
                body: 'some texts go here'
            }];

            service.getAllPosts().subscribe(posts => {
                expect(posts.length).toBe(1);
                expect(posts).toEqual(dummyPosts);
            });

            const req = httpMock.expectOne('https://my-json-server.typicode.com/LavrL/angular-blog-guestbook/posts')
            expect(req.request.method).toBe('GET');
            req.flush(dummyPosts);
        });

    })
})
