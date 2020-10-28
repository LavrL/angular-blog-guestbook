import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
//import { BlogPost } from '../shared/blog.model';

@Component({
  selector: 'app-blog-post-full',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-post-full.component.html',
  styleUrls: ['./blog-post-full.component.scss']
})
export class BlogPostFullComponent implements OnInit {
  public postBody$: Observable<string> = this.activatedRoute.data.pipe(pluck('post', 'body'));;
  public postTitle$: Observable<string> = this.activatedRoute.data.pipe(pluck('post', 'title'));;
  public postId$: Observable<string> = this.activatedRoute.data.pipe(pluck('post', 'id'));;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }

}
