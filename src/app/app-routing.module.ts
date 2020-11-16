import { BlogPostListComponent } from './blog/blog-post-list/blog-post-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'blog',
        component: BlogPostListComponent
    },
    {
        path: 'guestbook',
        loadChildren: () => import('./guestbook/guestbook.module').then(m => m.GuestbookModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'blog'
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