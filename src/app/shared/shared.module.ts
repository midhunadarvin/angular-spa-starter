import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }),
		LoadingModule.forRoot({
			animationType: ANIMATION_TYPES.threeBounce,
			backdropBackgroundColour: 'rgba(0, 0, 0, 0.1)',
			primaryColour: '#343A40',
			secondaryColour: '#343A40',
			tertiaryColour: '#343A40'
		})
	],
	exports: [
		// Shared Modules
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		LoadingModule,
		// Shared Components
		NavbarComponent,
		SidebarComponent
	],
	declarations: [NavbarComponent, SidebarComponent],
	providers: []
})
export class SharedModule { }
