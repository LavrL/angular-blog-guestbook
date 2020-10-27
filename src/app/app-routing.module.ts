import { GuestbookComponent } from './guestbook/guestbook.component';
import { NgModule } from '@angular/core';
import { BlogPostFullComponent } from './blog/blog-post-full/blog-post-full.component';
import { BlogPostListComponent } from './blog/blog-post-list/blog-post-list.component';
import { PostResolver } from './blog/shared/post-list.resolver';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'blog'
    },
    {
        path: 'blog',
        component: BlogPostListComponent
    },
    {
        path: 'guestbook',
        component: GuestbookComponent
    },
    // {
    //     path: '**', redirectTo: '/blog'
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }