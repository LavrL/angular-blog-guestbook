import { BlogService } from '../shared/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllPosts().subscribe(s => console.log(s));
  }

}
