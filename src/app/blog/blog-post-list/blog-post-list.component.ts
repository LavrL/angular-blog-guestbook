import { BlogService } from '../shared/blog.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../shared/blog.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {
  public blogAllPost$: Observable<BlogPost[]>;
  public fields = ['title', 'author', 'id'];
  public field = this.fields[0];
  public value = 'Title: Cats'

  constructor(private blogService: BlogService) { }

  public ngOnInit(): void {
    this.blogAllPost$ = this.blogService.getAllPosts();
  }

  public getItems(ev): void {
    const val = ev.target.value;
    console.log('value = ', val);
    if (val && val.trim() !== '') {
      this.blogAllPost$ = this.blogService.getAllPosts().pipe(
        map(post => post.filter(p => p[this.field] == val)));
    }
    else {
      this.blogAllPost$ = this.blogService.getAllPosts();
    }
  }

}
