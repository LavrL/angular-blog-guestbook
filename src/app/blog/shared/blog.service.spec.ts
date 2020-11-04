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
                body: 'some texts go here'
            }];

            service.getAllPosts().subscribe(posts => {
                console.log('posts = ', posts);
                expect(posts.length).toBe(1);
                expect(posts).toEqual(dummyPosts);
            });

            const req = httpMock.expectOne('https://my-json-server.typicode.com/LavrL/angular-blog-guestbook/posts')
            console.log(req.request.method);
            expect(req.request.method).toBe('GET');
            req.flush(dummyPosts);
        });

    })
})