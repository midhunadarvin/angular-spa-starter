import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
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
		{ provide: 'API_ENDPOINT', useValue: environment.API_ENDPOINT }
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
