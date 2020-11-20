import { BlogPost, BlogComment } from './blog.model';
import { BlogService } from './blog.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('BlogService', () => {
    let service: BlogService;
    let httpMock: HttpTestingController;
    const dummyPosts: BlogPost[] = [{
        id: '1',
        title: 'Dog',
        author: 'John',
        imgURL: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgAlt: 'Dog\'s picture',
        body: 'some texts go here'
    },
    {
        id: '2',
        title: 'Cat',
        author: 'Jack',
        imgURL: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        imgAlt: 'Cat\'s picture',
        body: 'some texts go here'
    }];
    const dummyComment: BlogComment[] = [{
        id: '1',
        title: 'Comment about Dogs',
        body: 'Dogs teach us a very important lesson in life: The mail man is not to be trusted!'
    },
    {
        id: '2',
        title: 'Comment about Cats',
        body: 'Dogs have owners, cats have staff.'
    }]

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
            service.getAllPosts().subscribe(posts => {
                expect(posts.length).toBe(2);
                expect(posts).toEqual(dummyPosts);
            });

            const req = httpMock.expectOne('https://my-json-server.typicode.com/LavrL/angular-blog-guestbook/posts')
            expect(req.request.method).toBe('GET');
            req.flush(dummyPosts);
        });

        it('should return post by specific ID', () => {
            service.getPostById('1').subscribe(posts => {
                expect(posts[0]).toEqual(dummyPosts[0]);
            });

            const req = httpMock.expectOne('https://my-json-server.typicode.com/LavrL/angular-blog-guestbook/posts/1');
            expect(req.request.method).toBe('GET');
            req.flush(dummyPosts);
        });

        it('should get comments by ID and comment number', () => {
            service.getCommentsById('1').subscribe(comment => {
                expect(comment[0]).toEqual(dummyComment[0]);
            });
            const req = httpMock.expectOne('https://my-json-server.typicode.com/LavrL/angular-blog-guestbook/comments');
            expect(req.request.method).toBe('GET');
            req.flush(dummyComment);
        });

        it('should get number of comments by post ID', () => {
            service.getCommentNumberByPostId('1').subscribe(comment => {
                expect(comment).toBe(1);
            })
            const req = httpMock.expectOne('https://my-json-server.typicode.com/LavrL/angular-blog-guestbook/comments');
            expect(req.request.method).toBe('GET');
            req.flush(dummyComment);
        });
    })
})
