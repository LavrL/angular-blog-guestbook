import { BlogPost, Searchfield } from '../shared/blog.model';
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
  public searchFields: Searchfield[] = [{
    id: 1,
    name: 'id'
  },
  {
    id: 2,
    name: 'author'
  },
  {
    id: 3,
    name: 'title'
  }]

  public searchField = this.getDefaultField();
  public isDesc = true;

  constructor(private blogService: BlogService) { }

  public getDefaultField(): string { return this.searchFields[0].name; }

  public ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(s => console.log('All posts = ', s));
    this.blogAllPost$ = this.blogService.getAllPosts();
  }

  public onChange(field: string): void {
    const direction = this.isDesc ? 1 : -1;
    this.blogAllPost$ = this.blogService.getAllPosts().pipe(
      map(post => post.sort((post1, post2) => {
        if (post1[field] < post2[field]) {
          return -1 * direction;
        }
        else if (post1[field] > post2[field]) {
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
        map(post => post.filter(p => p[this.searchField] == val)));
    }
    else {
      this.blogAllPost$ = this.blogService.getAllPosts();
    }
  }

}
