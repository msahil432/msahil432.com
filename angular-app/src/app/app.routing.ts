import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AdsenseModule } from 'ng2-adsense';

import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

const routes: Routes =[
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AdsenseModule,
    NgxTwitterTimelineModule.forRoot()
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
