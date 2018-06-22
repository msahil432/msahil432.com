import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {AgmCoreModule} from '@agm/core';
  
@NgModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })
      ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
