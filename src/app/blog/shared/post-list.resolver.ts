import { BlogPost } from './blog.model';
import { BlogService } from '../shared/blog.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostResolver implements Resolve<BlogPost> {

    constructor(private blogService: BlogService) { }

    public resolve(route: ActivatedRouteSnapshot): Observable<BlogPost> {
        return this.blogService.getPostById(route.paramMap.get('id')).pipe(take(1));
    }
}