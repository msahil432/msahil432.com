import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {ServiceWorkerModule} from '@angular/service-worker';

import { AdsenseModule } from 'ng2-adsense';

@NgModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AdsenseModule.forRoot({
          adClient: 'ca-pub-5745108171259405',
          adSlot: 8883800760,
        }),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: true})
      ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [AdsenseModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
