import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Modules
import { SharedModule } from '../shared/shared.module';

// Component
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
})
export class PagesModule { }
