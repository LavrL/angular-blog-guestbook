import { BlogPostFullComponent } from '../blog/blog-post-full/blog-post-full.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { NgModule } from '@angular/core';
import { PostResolver } from './shared/post-list.resolver';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogPostListComponent
  },
  {
    path: 'blog/post/:id',
    component: BlogPostFullComponent,
    resolve: {
      post: PostResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class BlogRoutingModule { }
