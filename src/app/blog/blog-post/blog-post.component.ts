import { BlogService } from '../shared/blog.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../shared/blog.model';

@Component({
  selector: 'app-blog-post',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  @Input() public postBody: string;
  @Input() public postTitle: string;
  @Input() public postId: string;
  public blogCommentNumberPerPost: Observable<number>
  public blogComments: Observable<BlogPost[]>;
  public isShown = false;

  constructor(private blogService: BlogService) { }

  public ngOnInit(): void {
    this.blogCommentNumberPerPost = this.blogService.getCommentNumberByPostId(this.postId);
    this.blogComments = this.blogService.getCommentsById(this.postId);
  }

  public showComments(): void {
    this.isShown = !this.isShown;
  }

}
