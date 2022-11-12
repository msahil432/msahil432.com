import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {ServiceWorkerModule} from '@angular/service-worker';

import { CookieService } from 'ngx-cookie-service';
import { ProfileDataService } from './services/profile-data.service';

@NgModule({
      imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: true}),
      ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [CookieService, ProfileDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
