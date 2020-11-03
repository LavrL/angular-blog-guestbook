import { BlogPost } from '../shared/blog.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private baseURL = 'https://my-json-server.typicode.com/LavrL/angular-blog-guestbook';

    constructor(private http: HttpClient) { };

    public getAllPosts(): Observable<BlogPost[]> {
        return this.http.get<BlogPost[]>(this.baseURL + '/posts');
    }

    public getPostById(id: string): Observable<BlogPost> {
        console.log('ID = ', id);
        return this.http.get<BlogPost>(this.baseURL + '/posts/' + id);
    }

    public getCommentsById(id: string): Observable<BlogPost[]> {
        return this.http.get<BlogPost[]>(this.baseURL + '/comments').pipe(
            map((com: BlogPost[]) => com.filter(comment => comment.id === id))
        )
    }

    public getCommentNumberByPostId(id: string): Observable<number> {
        return this.http.get<BlogPost[]>(this.baseURL + '/comments').pipe(
            map((com: BlogPost[]) => com.filter(comment => comment.id === id).length)
        );
    }
}