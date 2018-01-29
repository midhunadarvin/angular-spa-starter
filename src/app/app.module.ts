import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { DataService } from './services/data.service';
import { GlobalService } from './services/global.service';
import { TokenInterceptor } from './auth/token.interceptor';

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
		{ provide: 'API_ENDPOINT', useValue: environment.API_ENDPOINT },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
