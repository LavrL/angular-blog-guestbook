import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogModule } from './blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { LayoutModule } from '../app/layout/layout.module';
import { NgModule } from '@angular/core';
// import { environment } from '../environments/environment';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    GuestbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    LayoutModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
