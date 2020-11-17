import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-post-full.component.html',
  styleUrls: ['./blog-post-full.component.scss']
})
export class BlogPostFullComponent {
  public postBody$: Observable<string> = this.activatedRoute.data.pipe(pluck('post', 'body'));;
  public postTitle$: Observable<string> = this.activatedRoute.data.pipe(pluck('post', 'title'));;
  public postAuthor$: Observable<string> = this.activatedRoute.data.pipe(pluck('post', 'author'));;
  public postURL$: Observable<string> = this.activatedRoute.data.pipe(pluck('post', 'imgURL'));;

  constructor(private activatedRoute: ActivatedRoute) { }

}
