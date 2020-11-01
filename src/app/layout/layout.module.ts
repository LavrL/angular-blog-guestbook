import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    LayoutHeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    //MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    LayoutHeaderComponent
  ]
})
export class LayoutModule { }
