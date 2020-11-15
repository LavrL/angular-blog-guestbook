import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostFullComponent } from './blog-post-full/blog-post-full.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
  declarations: [
    BlogPostComponent,
    BlogPostListComponent,
    BlogPostFullComponent,
    StarRatingComponent
  ],
  imports: [
    BlogRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    BlogPostListComponent
  ]
})
export class BlogModule { }
