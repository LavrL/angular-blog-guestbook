import { BlogPost, starRatingColor } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  @Input() public postAuthor: string;

  public blogCommentNumberPerPost$: Observable<number>;
  public blogComments$: Observable<BlogPost[]>;
  public isShown = false;
  public rating = 2;
  public starCount = 8;
  public starColor = starRatingColor.warn;

  constructor(private blogService: BlogService) { }

  onRatingChanged(rating: number): void {
    this.rating = rating;
  }

  public ngOnInit(): void {
    this.blogCommentNumberPerPost$ = this.blogService.getCommentNumberByPostId(this.postId);
    this.blogComments$ = this.blogService.getCommentsById(this.postId);
    this.onRatingChanged(this.rating);
  }

  public showComments(): void {
    this.isShown = !this.isShown;
  }

}
