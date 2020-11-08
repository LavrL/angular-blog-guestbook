import { BlogPost } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  public value = 'Title: Cats';
  public isDesc = true;

  constructor(private blogService: BlogService) { }

  public ngOnInit(): void {
    this.blogAllPost$ = this.blogService.getAllPosts();
  }

  public onChange(field: string) {
    let direction = this.isDesc ? 1 : -1;
    this.blogAllPost$ = this.blogService.getAllPosts().pipe(
      map(post => post.sort(function (item1, item2) {
        if (item1[field] < item2[field]) {
          return -1 * direction;
        }
        else if (item1[field] > item2[field]) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      })));
  }

  public getItems(ev): void {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      this.blogAllPost$ = this.blogService.getAllPosts().pipe(
        map(post => post.filter(p => p[this.field] == val)));
    }
    else {
      this.blogAllPost$ = this.blogService.getAllPosts();
    }
  }

}
