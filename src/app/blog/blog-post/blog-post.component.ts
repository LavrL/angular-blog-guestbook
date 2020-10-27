import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    console.log('IDs == ', this.postId)
  }

}
