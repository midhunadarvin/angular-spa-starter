import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppConfig } from './config/app.config';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';

import { DataService } from './services/data.service';
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LayoutComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    DataService,
    GlobalService,
    { provide: 'API_ENDPOINT', useValue: AppConfig.API_ENDPOINT }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
