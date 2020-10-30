import { BlogService } from '../shared/blog.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../shared/blog.model';

@Component({
  selector: 'app-blog-post-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {
  public blogAllPost: Observable<BlogPost[]>;

  constructor(private blogService: BlogService) { }

  public ngOnInit(): void {
    this.blogAllPost = this.blogService.getAllPosts();
  }

}
