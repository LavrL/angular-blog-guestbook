// import { BlogComponent } from './blog/blog.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListComponent } from './blog/blog-post-list/blog-post-list.component';

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
    {
        path: '**', redirectTo: '/blog'
    }
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